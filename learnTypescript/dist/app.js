var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("welcome to typescript");
for (var index = 0; index < 10; index++) {
}
console.log(index);
// const pi=3.14;
function add(x, y) {
    if (x === void 0) { x = 10; }
    if (y === void 0) { y = 20; }
    return x + y;
}
console.log(add());
console.log(add(100));
console.log(add(100, 200));
//array destructuring: you can take a value from a array and assign to individual variabkles
var numbers = [3, 4, 5, 6, 7];
var var1 = numbers[0], var2 = numbers[1], remaining = numbers.slice(2);
console.log(var1);
console.log(var2);
console.log(remaining);
;
//object destructuring
var emp = {
    id: 100,
    empname: 'abhigya',
    salary: 10000
};
var id = emp.id, empname = emp.empname;
console.log(id, empname);
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
var sum = function (x, y) { return x + y; }; // arrow function
console.log(sum(100, 200));
/*let evennumbers = numbers.filter(function(n){
    return n%2 ===0;
});*/
var evennumbers = numbers.filter(function (n) { return n % 2 === 0; });
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
var Product = (function () {
    function Product(id, productname, cost) {
        this.id = id;
        this.productname = productname;
        this.cost = cost;
        console.log("new product instance is created");
    }
    Product.prototype.display = function () {
        console.log('id=' + this.id, 'productname=' + this.productname, 'cost=' + this.cost);
        var output = 'id=${this.id}, productname=${this.productname}, cost=${this.cost}';
        console.log('new output is:', output);
    };
    return Product;
}());
var p1 = new Product(100, 'Pen', 20);
console.log(p1);
p1.display();
// console.log(p1.id);
var StationaryProduct = (function (_super) {
    __extends(StationaryProduct, _super);
    function StationaryProduct(id, productname, cost) {
        var _this = _super.call(this, id, productname, cost) || this;
        _this.id = id;
        _this.productname = productname;
        _this.cost = cost;
        _this.category = 'stationary';
        return _this;
    }
    return StationaryProduct;
}(Product));
var scriblepad = new StationaryProduct(201, 'scribble pad', 30);
