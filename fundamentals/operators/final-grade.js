/*
  Imagina desarrollar un programa para calcular el promedio de calificaciones de estudiantes
  en una escuela. Como parte de este desafio, primero configuras el entorno para recibir
  entradas del usuario, permitiendo que ingresen tres notas.

  Luego, procesas estos datos para calcular el promedio de manera precisa.

  Finalmente, presentas el resultado formateado con maximo dos decimales, para asegurar una 
  lectura clara.

  Si el usuario ingresa las calificaciones 80, 70 y 90, la salida sera: 80
  */

  const prompt = require('prompt-sync')()

  const CANTIDAD_DE_NOTAS = 3

  const MAX_DIGITS = 2

  const note1 = parseFloat(prompt('Ingrese nota primer trimestre -> '))

  const note2 = parseFloat(prompt('Ingrese nota segundo trimestre -> '))

  const note3 = parseFloat(prompt('Ingrese nota tercer trimestre -> '))

  const promedio = (note1 + note2 + note3) / CANTIDAD_DE_NOTAS


  console.log(`
    
    --------------
    Nota Promedio
    --------------
    ${promedio.toFixed(MAX_DIGITS)}

    `)

