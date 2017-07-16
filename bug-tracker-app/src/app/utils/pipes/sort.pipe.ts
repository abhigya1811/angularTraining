import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
    name: 'sortPipe',
   /* pure: false //quick fix. not efficient*/
   pure:true
})
export class SortPipe implements PipeTransform{
    transform(data:any[],attrName:string, condition:boolean):any[]{
    if(!attrName)        
        return data;
    let comparer =getComparerFor(attrName);    
    /*if(condition)  {
        data.sort(comparer).reverse();
    }*/
    if(condition){
        comparer=getDescendaingComparer(comparer);
    }
    data.sort(comparer) ;
    return data;
    }
}

interface IComparer{
    (item1:any,item2:any):number
}

function getComparerFor(attrName:string):IComparer{
    return function(item1:any,item2:any):number{
        console.log('items:::', item1[attrName], item2[attrName]);
        if(item1[attrName]<item2[attrName]) return -1;
        if(item1[attrName]> item2[attrName]) return 1;
        return 0;
    }
}

function getDescendaingComparer(comparer: IComparer): IComparer{
return function(item1:any,item2:any):number{
    return comparer(item1,item2)* -1;
    }
}
