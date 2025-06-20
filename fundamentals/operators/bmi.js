/*
Escribe un programa sencillo en JavaScript que calcule y muestre el indice de Masa Corporal (IMC)
de un usuario. El programa debe solicitar al usuario su nombre, altura en metros y peso en Kilogramos.

Despues de calcular el IMC, el programa debe mostrar un mensaje al usuario que incluya su nombre
y el valor de su IMC.

Calcula el IMC utilizando la formula:

IMC = weight / height^2

Mombre: John
Altura: 1.75
Peso: 70

La salida sera Hi John , your BMI is ~22.86
*/

const prompt = require('prompt-sync')()

const name = (prompt('What is your name? -> '))
const height = parseFloat(prompt('What is your height? -> '))
const weight = parseFloat(prompt('what is your weight? -> '))

const imc = weight / Math.pow(height, 2)


console.log(`Hi ${name}, your BMI is ~${imc.toFixed(2)}`)