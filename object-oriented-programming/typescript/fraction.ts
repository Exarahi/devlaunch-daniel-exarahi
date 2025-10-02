/*

En este escenario, se te proporcionaran varias fracciones, y tu tarea se realizar diversas

operaciones con ellas, tales como suma, resta, multiplicacion y division.

El objetivo es obtener el numerador y el denominador resultantes de estas operaciones.

Para lograrlo, deberas definir dos atributos: el numerdor y el denominador.

Ademas, implementaras metodos correspondientes para cada operacion, devolviendo un objeto

resultante con el numerador y denominador calculados.

Dando la posibilidad de operar estas fracciones de 2 formas distintas, tanto de funciones aparte

del objeto como incluidos como parte de su funcional dentro del objeto mismo.

const fraction1 = createFraction(3, 4)
const fraction2 = createFraction(2, 3)

add(fraction1, fraction2)

const fraction3 = createFractionWithFunction(3, 4)
const fraction4 = createFraction(2, 3)

fraction3.add(fraction4)

*/

interface Fraction {
    numerator: number
    denominator: number
}

interface FractionWithOperations extends Fraction {
        numerator: number
        denominator: number
        add: (f2: Fraction) => Fraction
        subtract: (f2: Fraction) => Fraction
        multiply: (f2: Fraction) => Fraction
        devide: (f2: Fraction) => Fraction
}

const createFraction = (numerator: number, denominator:number): Fraction => {
    return{
        numerator,
        denominator
    }
}

const add = (f1: Fraction, f2: Fraction) => {
    const numerator = (f1.numerator * f2.denominator) + (f1.denominator * f2.numerator)
    const denominator = f1.denominator * f2.denominator

    return createFraction(numerator, denominator)   
}

const subtract = (f1: Fraction, f2: Fraction) => {
    const numerator = (f1.numerator * f2.denominator) - (f1.denominator * f2.numerator)
    const denominator = f1.denominator * f2.denominator

    return createFraction(numerator, denominator)   
}

const multiply = (f1: Fraction, f2: Fraction) => {
    const numerator = f1.numerator * f2.numerator
    const denominator = f1.denominator * f2.denominator

    return createFraction(numerator, denominator)   
}

const devide = (f1: Fraction, f2: Fraction) => {
    const numerator = (f1.numerator * f2.denominator)
    const denominator = f1.numerator * f2.denominator

    return createFraction(numerator,denominator)   
}

const createFractionWithFunction = (numerator: number, denominator: number): FractionWithOperations => {
    const f1 = createFraction(numerator, denominator)

    return{
        ...f1,
        add: (f2: Fraction) => add(f1, f2),
        subtract: (f2: Fraction) => subtract(f1, f2),
        multiply: (f2: Fraction) => multiply(f1, f2),
        devide: (f2: Fraction) => devide(f1, f2),
        
    }
}


const f1 = createFraction(3, 4)
const f2 = createFraction(2, 3)

console.log(add(f1, f2))
console.log(subtract(f1, f2))
console.log(multiply(f1, f2))
console.log(devide(f1, f2))

const f3 = createFractionWithFunction(3, 4)
const f4 = createFraction(2, 3)

console.log(f3.add(f4))
console.log(f3.subtract(f4))
console.log(f3.multiply(f4))
console.log(f3.devide(f4))