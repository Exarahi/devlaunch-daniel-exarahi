/*
Voy al supermercado GreenCenter para hacer mis compras habituales y
planeo comprar manzanas y naranjas.
Cuando estoy alli, veo que no hay platanos ni uvas, asi que cambio un poco mi lista.
Veo que 3 cajeros estan trbajando, asi que me preparo para pagar.
Mis cosas cuestan $100 dolares en total.
Entrego $150 en efectivo y recibo $50 de cambio.
*/

const supermarket = 'GreenCenter'

const favoriteFruit1 = 'Mazanas' 
const favoriteFruit2 = 'Naranjas'

const areBananasAvailable = false
const areGapesAvailable = false

const activeCashiers = 3

const cashInWallet = 150
const price = 100
const change = cashInWallet - price


console.log(`
    Supermercado:${supermarket}\n
    Compras:${favoriteFruit1},${favoriteFruit2}\n
    Cajeros:${activeCashiers}\n
    Precio:$${price}\n
    Cambio:$${change}\n

    `)