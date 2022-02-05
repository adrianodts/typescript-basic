// type assertion
let myName: any = 'adriano dantas'
let count = (<string>myName).length
let anotherWay = (myName as string).length

console.log(count)
console.log(anotherWay)


let product = {
    name: 'Iphone 13'
};

// Property 'price' does not exist on type 'object'.ts(2339)
//obj.price = 5000.99

// dynamic insert of property
// this way
(<any>product).price = 5000.99;
// another way
(product as any).category = 'Cellphone';

console.log(product)


// conversion number to string

let num: number = 10
let stringNum: string = num + ""
let stringNum1: string = num.toString()

console.log(num)
console.log(typeof stringNum)
console.log(typeof stringNum1)
console.log(typeof stringNum === typeof stringNum1)


// conversion string to number

let str: string = '-999'
let strToNum: number = +str
let strToNum1: number = Number.apply(str)

console.log(str)
console.log(typeof strToNum)
console.log(typeof strToNum1)
console.log(typeof strToNum === typeof strToNum1)
