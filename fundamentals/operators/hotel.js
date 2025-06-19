/*
  Crea un programa en JavaScript que calcule la factura total de una persona en un hotel,
  donde cada habitacion tiene un precio de $100 por noche, aprovechando una oferta promocional
  que incluye un descuento de 5%.

  El programa debe solicitar al huesped el numero de noches que paso en el hotel para calcular
  la factura final.

  Si el usuario ingresa que se quedo 5 noches, la salida sera: $475.00
*/


const prompt = require('prompt-sync')()

const PRICE_PER_DAY = 100

const promoDiscount = 0.05

const days = parseInt(prompt('Cuantos dias desea quedarse? -> '))

const subtotal = PRICE_PER_DAY * days
const discount = subtotal * promoDiscount
const total = subtotal - discount

console.log(`
    ____________________
    HOTEL RECEIPT
    ____________________
    Nights #: ${days}\n
    Payment\n
      - Subtotal: $${subtotal}
      - Discount: $${discount}
      - Total: $${total}
    `)




