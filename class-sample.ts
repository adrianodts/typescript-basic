class Animal {
    // name: string;

    // constructor(name: string) {
    //     this.name = name
    // }

    // the private parameter of constructor indicates a class property
    // and auto assign it's value.
    constructor(private name: string) {
        // no need to use this... but you can use if necessary!
        this.name = name
    }
}

// using default constructor
//let lion: Animal = new Animal();
//lion.name = 'Simba'

// using parameter constructor
let lion = new Animal('Simba')
console.log(lion)

let cat = new Animal('Garfield')
// Ops... Need to change visibility
// Property 'name' is private and only accessible within class 'Animal'.ts(2341)
//cat.name = 'Ted'