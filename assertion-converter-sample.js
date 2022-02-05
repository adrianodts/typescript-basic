// type assertion
var myName = 'adriano dantas';
var count = myName.length;
var anotherWay = myName.length;
console.log(count);
console.log(anotherWay);
var product = {
    name: 'Iphone 13'
};
// Property 'price' does not exist on type 'object'.ts(2339)
//obj.price = 5000.99
// dynamic insert of property
// this way
product.price = 5000.99;
// another way
product.category = 'Cellphone';
console.log(product);
// conversion number to string
var num = 10;
var stringNum = num + "";
var stringNum1 = num.toString();
console.log(num);
console.log(typeof stringNum);
console.log(typeof stringNum1);
console.log(typeof stringNum === typeof stringNum1);
// conversion string to number
var str = '-999';
var strToNum = +str;
var strToNum1 = Number.apply(str);
console.log(str);
console.log(typeof strToNum);
console.log(typeof strToNum1);
console.log(typeof strToNum === typeof strToNum1);
