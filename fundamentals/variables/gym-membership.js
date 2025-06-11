/*
El Elite Fitness Center es un gimnasio boutique ubicado en Palo Alto, California,
que ofrecce membresias por $150 al mes.
Opera de 6 AM a 10 PM, emplea a 10 entrenadores certificados
y cuenta con comodidaes como sauna, piscina y clases grupales.
*/

const gymName = 'Elite Fitness Center'
const gymType = 'Boutique'

const location = `Palo Alto, California`

const membership = 150
const currency ='$'
const duration = 'mes'

const openTime = 6
const closeTime = 22

const trainersAmount = 10

const amenity1 = `Sauna`
const amenity2 = 'Piscina'
const amenity3 = 'Clases grupales'

console.log(`
    Nombre: ${gymName}${gymType}\n
    Locacion: ${location}\n
    Membresia: ${currency}${membership}/${duration}\n
    Time: ${openTime}:00AM-${closeTime-12}:00PM\n
    Team: ${trainersAmount}certified\n
    Amenities: ${amenity1},${amenity2},${amenity3}.\n

    `)

