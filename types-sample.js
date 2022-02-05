// boolean 
var success = false; // implicit
var error = true; // explicit
// number
var num = 10;
var num2 = 10.5;
var num3 = 0xFA;
// Type 'string' is not assignable to type 'number'.ts(2322)
//num = 'teste'
// Type 'boolean' is not assignable to type 'number'.ts(2322)
//num2 = false
// string
var firstName = 'Adriano';
var lastName = 'Dantas';
// template string used to concat strings without using plus (+) operator
var fullName = "".concat(firstName, " ").concat(lastName);
console.log(fullName);
// array
var arrayStrings = ['a', 'b', 'c'];
console.log(arrayStrings);
var arrayObject = ['a', 'b', 'c', 4, 5];
console.log(arrayObject);
var arrayAny = ['a', 'b', 'c', 4, 5, true, ['a', 1], false, 10.51];
console.log(arrayAny);
// enum
var EstadoCivil;
(function (EstadoCivil) {
    EstadoCivil[EstadoCivil["Solteiro"] = 0] = "Solteiro";
    EstadoCivil[EstadoCivil["Casado"] = 1] = "Casado";
    EstadoCivil[EstadoCivil["Divorciado"] = 2] = "Divorciado";
})(EstadoCivil || (EstadoCivil = {}));
console.log(EstadoCivil);
console.log(EstadoCivil.Casado);
var estadoCivil = EstadoCivil.Solteiro;
console.log(estadoCivil);
console.log(EstadoCivil.Solteiro == estadoCivil);
console.log(EstadoCivil[estadoCivil]);
// object
var obj = {
    fName: 'Adriano',
    lName: 'Dantas'
};
// Type 'string' is not assignable to type 'object'.ts(2322)
// obj = "string"
console.log(obj);
var obj1 = {
    category: 'categoria 1',
    product: 'produto 1'
};
// Type 'number' is not assignable to type 'object'.ts(2322)
obj1 = 1;
console.log(obj1);
// any
var variable = 4;
// this type can accept any type of variable
console.log(variable = {});
console.log(variable = "string");
console.log(variable = false);
console.log(variable = 10.12);
console.log(variable = ['a', 'b']);
// 
