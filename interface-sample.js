var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// interface difined in function
//function show ({category, product} : {category: string, product: string}) {
function show(_a) {
    var category = _a.category, product = _a.product;
    console.log(category);
    console.log(product);
}
show({ category: 'Categoria', product: 'Produto' });
show({ category: 'Categoria' });
var obj = { category: 'Cellphone', product: 'Iphone' };
console.log(obj);
// working with class
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
var computer = new Product();
computer.category = 'Notebook';
computer.product = 'Computer';
console.log(computer);
console.log(computer.category);
console.log(computer.product);
var AnimalBase = /** @class */ (function () {
    function AnimalBase(name, color) {
        this.name = name;
        this.color = color;
    }
    AnimalBase.prototype.correr = function () {
        console.log('Animal correndo');
    };
    AnimalBase.prototype.comer = function () {
        console.log('Animal comendo');
    };
    return AnimalBase;
}());
var Rabbit = /** @class */ (function (_super) {
    __extends(Rabbit, _super);
    function Rabbit(name, color, height) {
        var _this = _super.call(this, name, color) || this;
        _this.heigth = height;
        return _this;
    }
    Rabbit.prototype.comer = function () {
        _super.prototype.comer.call(this);
        console.log('Rabbit comendo');
    };
    Rabbit.prototype.correr = function () {
        _super.prototype.correr.call(this);
        console.log('Rabbit correndo');
    };
    return Rabbit;
}(AnimalBase));
var rabbit = new Rabbit('Rabbit', 'Orange', 15.5);
console.log(rabbit);
rabbit.comer();
rabbit.correr();
