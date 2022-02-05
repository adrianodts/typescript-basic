var Animal = /** @class */ (function () {
    // name: string;
    // constructor(name: string) {
    //     this.name = name
    // }
    // the public parameter of constructor indicates a class property
    // and auto assign it's value.
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
// without a constructor
//let lion: Animal = new Animal();
//lion.name = 'Simba'
var lion = new Animal('Simba');
console.log(lion);
