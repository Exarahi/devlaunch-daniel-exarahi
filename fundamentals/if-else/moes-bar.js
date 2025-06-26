/*
Se solicita al usuario que ingrese su fecha de nacimiento en el formato YYYY/MM/DD.

Calculo de Edad: 

Se crea un objeto Date para la fecha de nacimiento y se calcula la edad restando el ano de
nacimiento del ano actual. Tambien se verifica si ya ha pasado el cumpleanos del ano actual, 
para ajustar la edad si es necesario.

Verificacion de edad:

Se utiliza un if-else para determinar si la persona cumple con la edad legal para beber (18 o mas)
Este programa permite que el proceso de verificacion de edad se automatico y preciso, asegurando que 


Puedes guiarte con esto.

const prompt = require('prompt-sync)()

const birthdate = prompt("What is your birthdate in format (YYYY/MM/DD)? ");

const birthdate = new Date(birthdate)
const today = new Date()

const age = today.getFullYear() - birthday.getFullYear() // takes the age of the person

*/

const prompt = require('prompt-sync')()

const birthdate = prompt('What is your birthdate in format (YYYY/MM/DD)? ')

const today = new Date()
const birthday = new Date(birthdate)

let age = today.getFullYear() - birthday.getFullYear()

const birthdayPassed = (
    today.getMonth() > birthday.getMonth() ||
  (
    today.getMonth() === birthday.getMonth() &&
    today.getDate() >= birthday.getDate()
  )

)
if (!birthdayPassed) {
    age--
}

if (age >= 18) {
  console.log('Bienvenido al bar de Moe')
} else{
  console.log('No puedes pasar hasta tener 18 annos o mas')
}

console.log(age)