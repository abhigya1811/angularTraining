console.log("welcome to typescript");
for(var index=0;index<10;index++){

}
console.log(index);
// const pi=3.14;

function add(x=10,y=20){
    return x+y;
}
console.log(add());
console.log(add(100));
console.log(add(100,200));


//array destructuring: you can take a value from a array and assign to individual variabkles

let numbers = [3,4,5,6,7];
let [var1,var2,...remaining]=numbers;
console.log(var1);
console.log(var2);
console.log(remaining);


interface IEmployee{
    id:number,
    empname:string,
    salary:number
};
//object destructuring

let emp:IEmployee ={
    id:100,
    empname:'abhigya',
    salary:10000
};
let{id,empname} =emp;
console.log(id,empname);

//arrow functions
/*function sum(x,y){
    return x+y;
}
let sum = function(x,y){
    return x+y;
};

let sum =(x,y) => {
    return x+y;
};*/

let sum =(x,y) => x+y;// arrow function
console.log(sum(100,200));

/*let evennumbers = numbers.filter(function(n){
    return n%2 ===0;
});*/

let evennumbers = numbers.filter(n => n%2 ===0);
console.log(evennumbers);

/*class Product{
    id:number;
    productname:string;
    cost:number;
    constructor(id, productname, cost){
        console.log("new product instance is created");
        this.id=id;
        this.productname=productname;
        this.cost=cost;
    }
    display(){
        console.log('id='+this.id, 'productname='+this.productname, 'cost='+this.cost);
    }
}*/
class Product{
    
    constructor(public id, public productname, public cost){
        console.log("new product instance is created");
       
    }
    display(){
        console.log('id='+this.id, 'productname='+this.productname, 'cost='+this.cost);
        let output = `id=${this.id}, productname=${this.productname}, cost=${this.cost}`;
        console.log('new output is:',output);
    }
}
let p1=new Product(100,'Pen',20);
console.log(p1);
p1.display();
// console.log(p1.id);

class StationaryProduct extends Product {
    public category:string;
    constructor(public id,public productname, public cost){
        super(id,productname,cost);
        this.category='stationary';
    }
}

let scriblepad= new StationaryProduct(201,'scribble pad',30);
