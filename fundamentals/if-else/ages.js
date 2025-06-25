/*
El programa solicita al usuario su edad con prompt-sync, la convierte a numero y
 utiliza el ternary operator para clasificar:

 0 - 2 years: "You are a baby"
 3 - 13 years: "You are a child"
 14 -17 years: "You are a teenager"
 18 - 29 years: "You are a young adult"
 30 - 60 years: "You are an adult"
 more than 60 years: "You are an elderly"

 Si la edad es menor de 0, muestra: "The institution does not support your age, please try again."
 Es una forma clara y util de categorizar por edades.

 */


 const prompt = require('prompt-sync')()

const age = parseInt(prompt('Por favor ingrese su edad: '))

const message = (
    (age >= 0 && age<=2)
 ? 'You are a baby'
  : (age >=3 && age <=13) 
 ? 'You are a child'
  : (age >=14 && age <=17) 
 ? 'You are a teenager'
  : (age >=18 && age <=29)   
 ? 'You are a young adult'
  : (age >=30 && age <=60)
 ? 'You are an adult'
: (age >60)
 ? 'You are an elderly'
 :null
)

console.log(message ? message : 'The institution does not support your age, please try again')
