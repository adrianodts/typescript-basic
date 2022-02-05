// anonimoous function sample -> use const
var soma = function (x, y) {
    return x + y;
};
var result = soma(1, 1);
console.log(result);
// arrow function sample
var somaArrow = function (x, y) {
    return x + y;
};
console.log(somaArrow(3, 4));
// short hand function sample
var somaShortHand = function (x, y) { return x + y; };
console.log(somaShortHand(5, 6));
var func = function (firstName) { return "".concat(firstName, " Dantas"); };
console.log(func('Adriano'));
// default parameters
var defaultParFunc = function (firstName, lastName) {
    if (lastName === void 0) { lastName = 'Dantas'; }
    return "".concat(firstName, " ").concat(lastName);
};
console.log(defaultParFunc('Adriano'));
// optional parameters
var optionalParFunc = function (firstName, lastName) {
    if (!lastName) {
        return "".concat(firstName);
    }
    return "".concat(firstName, " ").concat(lastName);
};
console.log(optionalParFunc('Adriano'));
console.log(optionalParFunc('Adriano', 'Dantas'));
