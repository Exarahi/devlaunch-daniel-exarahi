/*
  En una empresa hay un proceso donde cada trabajador debe registrar las horas de entrada
  y salida diariamente. De esta forma, al final de cada dia, su empleador sabra cuanto
  tiene que pagarles por sus horas trabajadas.
  Pero, si una persona trabajo mas de ocho horas, se le debe de pagar un costo extra por
  las horas adicionales, que es igual a 1.5 veces el monto de su tarifa por hora.
  Haz un programa que, recibiendo la tarifa por hora de entrada y las hora de salida,
  imprima el monto total de dinero que ese empleador recibio ese dia.

  Tarifa por hora: $10
  Hora de entrada: 9:00
  Hora de salida: 18:00

  Respuesta:$95
  */

  const prompt = require('prompt-sync')()

  const WORK_DAY_HOURS = 8
  const EXTRA_HOURS_MULTIPLIER = 1.5

  const calculateSalary = (paymentPerHour, startTime, endTime) => {
    const [startHour] = startTime.split(':')
    const [endHour] = endTime.split(':')

    const workedHours = endHour - startHour

    let salary = 0

    if (workedHours <= WORK_DAY_HOURS) {
      salary = paymentPerHour * workedHours
    } else {
      const extraHours = workedHours - WORK_DAY_HOURS
      salary = (paymentPerHour * WORK_DAY_HOURS) + ((extraHours * paymentPerHour)* EXTRA_HOURS_MULTIPLIER)
    }
    return salary
  }

  const main = () => {
     const paymentPerHour = parseFloat(prompt('Payment per hour($): '))
     const startTime = prompt('Start Hour: ')
     const endTime = prompt('End Hour: ')

     const salary = calculateSalary(paymentPerHour, startTime, endTime)

  console.log(`SALARY: $${salary}`)
  }

  main ()

 