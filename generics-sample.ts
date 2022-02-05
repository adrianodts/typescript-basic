let numbers: Array<number> = [0]

numbers[1] = 1

console.log(numbers)

for (let n of numbers) {
    console.log(n)
}

// generic function
function genericFunc<T>(name: T): T {
    return name
}

let num: number = genericFunc<number>(10.5)
console.log(num)

let str: string = genericFunc<string>("My string value")
console.log(str)


class List<T> {

    items: Array<T> = []

    add<t>(item: T): void {
        this.items.push(item)
    }
}


let list = new List<any>()
list.add('string')
list.add(true)
list.add(['a', 'b'])
list.add(1.12)

console.log(list.items)
