// anonimoous function sample -> use const
const soma = function(x: number, y): number {
    return x + y
}

let result: number = soma(1, 1)
console.log(result)


// arrow function sample
const somaArrow = (x: number, y: number): number => {
    return x + y
}
console.log(somaArrow(3, 4))


// short hand function sample
const somaShortHand = (x: number, y: number): number => x + y
console.log(somaShortHand(5, 6))

const func = firstName => `${firstName} Dantas`
console.log(func('Adriano'))


// default parameters

let defaultParFunc = (firstName: string, lastName: string = 'Dantas'): string => {
    return `${firstName} ${lastName}`
}

console.log(defaultParFunc('Adriano'))


// optional parameters

let optionalParFunc = (firstName: string, lastName?: string): string => {
    if (!lastName) {
        return `${firstName}` 
    }
    return `${firstName} ${lastName}` 
}

console.log(optionalParFunc('Adriano'))

console.log(optionalParFunc('Adriano', 'Dantas'))
