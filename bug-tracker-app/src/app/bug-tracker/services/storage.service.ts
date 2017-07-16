/*import {IBug} from '../models/IBug';
export class StorageOperations{
    private storage:Storage=window.localStorage;

    persistBug(bug:IBug):void{
        JSON.stringify(bug);
        console.log('setting bug');
        window.localStorage.setItem( bug.id.toString(),JSON.stringify(bug));
    }

    removeBug(bug:IBug):void{
        JSON.stringify(bug);
        window.localStorage.removeItem(bug.id.toString());
    }

    getBug(bug:IBug):IBug{
        let bugToGet:IBug=JSON.parse(window.localStorage.getItem(bug.id.toString()));
        console.log(bugToGet);
        return bugToGet;
    }

    getAllBugs():IBug[]{
        let bugsList:IBug[]=[];
        for(let index=0,storeCount=this.storage.length;index<storeCount;index++)//todo
        return bugsList;
    }
}*/
import { IBug } from '../models/IBug';
import { BugOperations } from './BugOperations.service';
import { Injectable } from '@angular/core';

@Injectable()
export class StorageOperations{
	private currentBugId : number = 0;
	private storage : Storage = window.localStorage;

	constructor(private bugOperations : BugOperations){

	}
	getAll() : IBug[]{
		let result : IBug[] = [];
		for(let index =0, storeCount = this.storage.length; index < storeCount; index++){
			let key = this.storage.key(index),
				data = this.storage.getItem(key),
				bug = JSON.parse(data);
			this.currentBugId = this.currentBugId > bug.id ? this.currentBugId : bug.id;
			result.push(bug);
		} 
		return result;
	}
	private save(bug){
		this.storage.setItem(bug.id.toString(), JSON.stringify(bug));
	}
	addNew(bugName : string) : IBug {
		let newBug = this.bugOperations.createNew(++this.currentBugId, bugName);
		this.save(newBug);
		return newBug;
	} 
	toggle(bug : IBug) : IBug{
		let toggledBug = this.bugOperations.toggle(bug);
		this.save(toggledBug);
		return toggledBug;
	}
	remove(bug : IBug) : void{
		this.storage.removeItem(bug.id.toString());
	}
}