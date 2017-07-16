import {Pipe , PipeTransform} from '@angular/core';
import {IBug} from '../models/IBug';
@Pipe({
    name:'closeCount'
})
export class GetClosedCountPipe implements PipeTransform{
    transform(bugs: IBug[]):number{
        return bugs.reduce<number>((prevResult:number, bug:IBug)=>bug.isClosed ? ++prevResult : prevResult ,0);
    }
}
