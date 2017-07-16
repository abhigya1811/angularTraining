import {Component} from '@angular/core';
import {IBug} from './models/IBug';
import {BugOperations} from './services/BugOperations.service';
import {StorageOperations} from './services/storage.service';
@Component({
    selector: 'bug-tracker',
    templateUrl: 'bugTracker.component.html',
    styleUrls: ['bugTracker.style.css']
})
export class BugTrackerComponent{
    newBugName: string="";
    // bugs:Array<IBug>=[];
    // bugs:IBug[]=[];
    
    // bugOperations:BugOperations = new BugOperations();

   /* constructor(public bugOperations:BugOperations , public storageOperations:StorageOperations){
        this.bugs.push(this.bugOperations.createNew('User'));
        this.bugs.push(this.bugOperations.createNew('Data'));
        this.bugs.push(this.bugOperations.createNew('Service'));
        this.bugs.push(this.bugOperations.createNew('Application'));
    }*/
    /*createBug(){
        
        let newBug: IBug ={
            name: this.newBugName,
            isClosed: false
        };
        this.bugs.push(newBug);
    }*/

   /* createBug(){
        let newBug:IBug=this.bugOperations.createNew(this.newBugName);
       // this.bugs.push(newBug);
        this.bugs = [...this.bugs,newBug];
        this.storageOperations.persistBug(newBug);
    }*/

    /*onBugClick(bug){
        console.log("bug is being clicked",bug);
        bug.isClosed=!(bug.isClosed);
    }*/
    /*onBugClick(bug){
       this.bugOperations.toggle(bug);
    }*/
    /*onBugClick(bugToToggle){
        let toggledBug=this.bugOperations.toggle(bugToToggle);
        this.bugs=this.bugs.map(bug=>bug===bugToToggle?toggledBug:bug);
    }

    onRemoveClosed(){
        this.bugs=this.bugs.filter(bug => !(bug.isClosed));
        console.log(this.bugs.length);
    }*/

    /*getClosedCount(){
        let closedCount=0;
        for(let index=0, bugsLength=this.bugs.length; index<bugsLength; index++ ) {
            if(this.bugs[index].isClosed){
                closedCount++;
            }
        }
        return closedCount;
    }
*/
   /* getClosedCount(){
        return this.bugs.filter(function(bug){
            return bug.isClosed;
        }).length;
    }*/

    /*getClosedCount(){
        return this.bugs.reduce<number>(function(prevResult:number, bug:IBug){
            return bug.isClosed ? ++prevResult : prevResult;
        },0);
    }*/

   /* getClosedCount(){
        console.log("inside get closed count");
        return this.bugs.reduce<number>((prevResult:number, bug:IBug)=>bug.isClosed ? ++prevResult : prevResult ,0);
    }
*/
    /*onRemoveClosed(){
        for(let index=this.bugs.length -1; index>=0;index--){
            if(this.bugs[index].isClosed){
                this.bugs.splice(index,1);
            }
        }
    }*/



	bugs : IBug[] = [];

	constructor(private bugStorage : StorageOperations){
		this.bugs = this.bugStorage.getAll();
	}

	createBug(){
		let newBug : IBug = this.bugStorage.addNew(this.newBugName);
		//this.bugs.push(newBug);
		this.bugs = [...this.bugs, newBug];
	}

	onBugClick(bugToToggle){
		let toggledBug = this.bugStorage.toggle(bugToToggle);
		this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug);
	}

	onRemoveClosed(){
		/*for(let index = this.bugs.length -1; index >= 0; index--){
			if (this.bugs[index].isClosed)
				this.bugs.splice(index, 1);
		}*/
		this
			.bugs
			.filter(bug => bug.isClosed)
			.forEach(bug => this.bugStorage.remove(bug));
			
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}


}



/*
window.localStorage (object)
===================
- key/value store
- both key and value must be strings
- use JSON.stringify & JSON.parse for searialization and deserialization of objects to strings
- follows Same Origin Policy
- APIs
------
	* setItem(key, value)
	* getItem(key) returns value
	* removeItem(key)
	* clear()
	* key(index) return key at index location
	* length
*/

/*import * as utilities from './utilities';
let add= utilities.add;
console.log(add(100,200));

instead , we can write :
import {add} from './utilities';


you can export more than one object. or use object destructuring. you can also export one default item
read about ES6 Module system*/

/*an event is supposed to be a publisher-subscriber design approach.

"global scope pollution" --> read

*/


