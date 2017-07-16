//ES 6
class spinner{
    counter:number;
    constructor(){
        this.counter=0;
    }
    up(){
        return ++this.counter;
    }
    down(){
        return --this.counter;
    }
}

//ES 5
/*function Spinner(){
    this.counter=0;
}
Spinner.prototype.up = function(){
    return ++this.counter;
};
Spinner.prototype.down=function(){
    return --this.counter;
}*/


