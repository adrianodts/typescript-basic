var numbers = [0];
numbers[1] = 1;
console.log(numbers);
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var n = numbers_1[_i];
    console.log(n);
}
// generic function
function genericFunc(name) {
    return name;
}
var num = genericFunc(10.5);
console.log(num);
var str = genericFunc("My string value");
console.log(str);
var List = /** @class */ (function () {
    function List() {
        this.items = [];
    }
    List.prototype.add = function (item) {
        this.items.push(item);
    };
    return List;
}());
var list = new List();
list.add('string');
list.add(true);
list.add(['a', 'b']);
list.add(1.12);
console.log(list.items);
