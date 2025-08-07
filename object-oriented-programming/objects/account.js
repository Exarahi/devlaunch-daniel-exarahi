/*

Estas disenando un sistema para gestionar cuentas bancarias de clientes.

Cada cuenta bancaria tendra un identificador unico, un nombre del titular y un saldo.

Tu tarea es crear una funcion createAccount que genere un objeto de cuenta bancaria.

El objeto debe ser creado por medio de un function declaration, con todas las propiedades y 

metodos deben estar definidos dentro de la funcion usando this.

Propiedades de la cuenta bancaria  (dentro de la funcion usando this):

id: identificador unico de la cuenta.

holderName: nombre del titular de la cuenta.

balance: saldo de la cuenta

Metodos de la cuenta bancaria (dentro de la funcion usando this):

deposit(amount): incrementa el saldo en la cuenta.

withdraw(amount): disminuye el saldo de la cuenta si hay suficientes fondos.

transfer(toAccount): transfiere fondos de la cuenta actual a otra cuenta.

si hay suficientes fondos disponibles.

*/


function Account(id, name, balance = 0) {

    this.id = id
    this.name = name
    this.balance = balance
    

this.deposit = (amount) => {
    this.balance += amount 
} 

this.withdraw = (amount) => {
    if(this.balance >= amount){
    this.balance -= amount
    return amount
   }    
     return null
}   

this.transfer = (toAccount, amount) => {
    const cash = this.withdraw(amount)

    if (cash){
        toAccount.deposit(cash)
        return toAccount
    }
    return null
    }
return this
}

const acct1 = new Account(1, 'Daniel', 10000)

acct1.deposit(1000)
acct1.withdraw(5000)

const acct2 = new Account(2, 'Juan')

acct1.transfer(acct2, 5000)








