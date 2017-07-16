/*import {IBug} from '../models/IBug';
export class BugOperations{
    currentBugId:number=0;
    createNew(bugName:string):IBug{
        return{
            id: ++this.currentBugId,
            name:bugName,
            isClosed:false
        }
    }

    toggle(bug:IBug): void{
        bug.isClosed=!(bug.isClosed);
    }
     toggle(bug:IBug): IBug{
        return {...bug, isClosed:!bug.isClosed};
    }
}*/

import { IBug } from '../models/IBug';

export class BugOperations{
	//currentBugId : number = 0;
	
	createNew(id : number, bugName : string) : IBug {
		return {
			id : id,
			name : bugName,
			isClosed : false,
            createdAt: new Date()
		}
	}

	toggle(bug : IBug) : IBug {
		return {...bug, isClosed : !bug.isClosed};
	}
}