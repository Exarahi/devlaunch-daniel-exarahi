/*
Escribe un programa simple en JavaScript que evalue el valor de una variable llamada 'n'.
Verifica si el numero es positivo, negativo o cero, y muestra un masaje correspondiente
basado en la siguiente evaluacion:

Si el numero es mayor que 0, imprime 'Positivo'.
Si el numero es menor que 0, imprime 'Negativo'.
Si el numero es exactamente 0, imprime 'Cero'.

Si la variable no es un numero, imprime un mensaje de error: ' Por favor, introduce un numero valido'
*/

const prompt = require('prompt-sync')()

const n = parseInt(prompt('Digite un numero: '))

if (n > 0){
  console.log('positivo')
} else if (n < 0) {
  console.log('Negativo')
} else if(n === 0) {
  console.log('Cero')
}else {
  console.log('Por favor, introduce un numero valido')
} 