// boolean 
let success = false; // implicit
let error: boolean = true // explicit

// number
let num = 10
let num2: number = 10.5
let num3: number = 0xFA

// Type 'string' is not assignable to type 'number'.ts(2322)
//num = 'teste'

// Type 'boolean' is not assignable to type 'number'.ts(2322)
//num2 = false

// string
let firstName = 'Adriano'
let lastName : string = 'Dantas'

// template string used to concat strings without using plus (+) operator
let fullName = `${firstName} ${lastName}`

console.log(fullName)

// array
let arrayStrings: string[] = ['a', 'b', 'c']
console.log(arrayStrings)

let arrayObject = ['a', 'b', 'c', 4, 5]
console.log(arrayObject)

let arrayAny: Array<any> =  ['a', 'b', 'c', 4, 5, true, ['a', 1], false, 10.51]
console.log(arrayAny)

// enum
enum EstadoCivil {
    Solteiro,
    Casado,
    Divorciado
}

console.log(EstadoCivil)
console.log(EstadoCivil.Casado)

let estadoCivil : EstadoCivil = EstadoCivil.Solteiro
console.log(estadoCivil)
console.log(EstadoCivil.Solteiro == estadoCivil)
console.log(EstadoCivil[estadoCivil])


// object

let obj: object = {
    fName: 'Adriano',
    lName: 'Dantas'
}

// Type 'string' is not assignable to type 'object'.ts(2322)
// obj = "string"

console.log(obj)

let obj1: Object = {
    category: 'categoria 1',
    product: 'produto 1'
}
// when the type is Object, it can be assign to another type of variable.
obj1 = 1
console.log(obj1)

// any
let variable: any = 4

// this type can accept any type of variable
console.log(variable = {})
console.log(variable = "string")
console.log(variable = false)
console.log(variable = 10.12)
console.log(variable = ['a', 'b'])
