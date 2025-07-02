/*

El proveedor principal de servicios de telefonia movil en la ciudad esta introduciendo una oferta
promocional basada tanto en el monto de recarga realizado por sus clientes coo en la duracion de 
su suscripcion con la compania. Para ser elegible para la promocion, los cloentes deben recargar
un minimo de $20 y un maximo de $80 y haber estado suscritos durante al menos un ano.

En la promocion SuperSaver, los clientes pueden disfrutar de un monto de recarga duplicado si su
recarga es inferior a $38 y han estado afiliados al servicio por tres anos o menos.

Por otro lado, la promocion MegaRecharge esta dirigida a los clientes que han estado suscritos por
mas de tres anos, ofreciendoles un monto de recarga triplicado independientemente del monto recargado.

Tu tarea es desarrollar un programa que tome como entrada el nombre del cliente, el monto
de recarga y la duracion de su suscripcion, y determine si la promocion les aplica y calcule el monto
total de recarga incluyendo la promocion.

*/

const prompt = require('prompt-sync')() 

const MIN_MONTHS_DURATION = 12
const MIN_RECHARGE_AMOUNT = 20
const MAX_RECHARGE_AMOUNT = 80

const SUPER_PROMO_MIN_AMOUNT = 38
const SUPER_PROMO_MULTIPLIER = 2

const MEGA_PROMO_MIN_DURATION = 36
const MEGA_PROMO_MULTIPLIER = 3


function validatePromo(rechargeAmount, subTime) {
  if (subTime < MIN_MONTHS_DURATION) return rechargeAmount

  let multiplier = 1

   if (rechargeAmount > MIN_RECHARGE_AMOUNT) {
     if (subTime >= MEGA_PROMO_MIN_DURATION) {
     multiplier = MEGA_PROMO_MULTIPLIER
   }  else if (
     rechargeAmount >= SUPER_PROMO_MIN_AMOUNT && 
     rechargeAmount <= MAX_RECHARGE_AMOUNT 
   )
      multiplier = SUPER_PROMO_MULTIPLIER
  }
    return rechargeAmount * multiplier
  }

function main() {
  const name = prompt('What is your name?: ')
  const rechargeAmount = parseInt(prompt('Recharge Amount ($): '))
  const subTime = parseInt(prompt('Subscription Time (Months): '))

  const recharge = validatePromo(rechargeAmount, subTime)
  const promo = recharge - rechargeAmount

  console.log(`
    THANKS: ${name}!
    -----------------
    RECHARGE: $${recharge}
    PROMO: $${promo}

    `)
}

main()
