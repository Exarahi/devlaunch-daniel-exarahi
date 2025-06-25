/*

El programa  solicita al usuario un numero del 1 al 7 mediante prompt-sync.
Utiliza una declaracion switch para mostrar el dia de la semana correspondiente o 
"Invalid day" si el numero no es valido. Ejemplo; 3 muestra "Wendnesday", 
8 muesntra "Invalid day". Ideal para identificar dias en programas simples.

*/

const prompt = require('prompt-sync')()

const dayNumber =  parseInt(prompt('Ingrese un numero de 1-7; '))

switch (dayNumber) {
  case 1:
    console.log('Domingo')
    break
  case 2:
    console.log('Lunes')  
    break
  case 3:
    console.log('Martes')
    break
  case 4:
    console.log('Miercoles')
    break
  case 5:
    console.log('Jueves')
    break
  case 6:
    console.log('Viernes')
    break
  case 7:
    console.log('Saturday')
    break
    default:
      console.error('Invalid day')          
}


