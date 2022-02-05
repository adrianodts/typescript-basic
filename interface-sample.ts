interface ObjectValue {
    category: string;
    product?: string;
 } 
 
// interface difined in function
//function show ({category, product} : {category: string, product: string}) {
function show ({category, product} : ObjectValue) {
    console.log(category)
    console.log(product)
}

show({ category: 'Categoria', product: 'Produto'})
show({ category: 'Categoria'})

let obj: ObjectValue = { category: 'Cellphone', product: 'Iphone' }

console.log(obj)


// working with class

class Product implements ObjectValue {
    category: string;
    product: string;
}

let computer = new Product()
computer.category = 'Notebook'
computer.product = 'Computer'
console.log(computer)
console.log(computer.category)
console.log(computer.product)


interface IAnimal {
    name: string;
    color: string;
    correr();
}

class AnimalBase implements IAnimal {
    constructor(public name: string, public color: string) {
    }
    public correr() {
        console.log('Animal correndo')
    }
    protected comer() {
        console.log('Animal comendo')
    }
}

class Rabbit extends AnimalBase {
    heigth: number;

    constructor(name: string, color: string, height: number) {
        super(name, color)
        this.heigth = height
    }
    public comer() {
        super.comer()
        console.log('Rabbit comendo')
    }

    public correr() {
        super.correr()
        console.log('Rabbit correndo')
    }
}


let rabbit: Rabbit = new Rabbit('Rabbit', 'Orange', 15.5)
console.log(rabbit)
rabbit.comer()
rabbit.correr()