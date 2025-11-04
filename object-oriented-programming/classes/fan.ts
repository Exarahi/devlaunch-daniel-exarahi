/*

Cuando se trata de ventiladores, a menudo presentan caracteristicas distintivas como configuraciones
de velocidad, tamano, potencia medida en vatios o caballos de fuerza, tipo y color.

Para manejar y modificar adecuadamente las caracteristicas de un ventilador, es util organizarlas
en un sistema de clases. De esta manera, se obtiene una estructura clara para trabajar con las
propiedades del ventilador, facilitando la compresnsion, reutilizacion y mantenimiento del codigo.

Para abordar esta tarea, crearemos una clase que capsule los diferentes atributos de un ventilador.
Esta clase incluira un constructor para inicializar dichos atributos y metodos como getters y setters
para acceder y modificarlos segun sea necesario.

Al implementar esta estructura de clase, podremos representar y gestionar de manera eficiente las
caracteristicas de los ventiladores en nnuestro sistema.

Esta clase esta disenada para proporcionar todas las caracteristicas esenciales del ventilador 
desde el momento de su creacion

*/

type FanSize ='small' | 'medium' | 'large'
type FanColor = 'white' | 'black' | 'gray'
type FanSpeed = 0 | 1 | 2 | 3

class Fan {
    public speed: FanSpeed = 0

    constructor(
        public type: string,
    
        public size: FanSize,
        public color: FanColor
    ) {
        this.type = type
        this.size = size
        this.color = color
        this.speed = 0
    }

    public setType(type: string) {
        this.type = type
    }

    public getType() {
        return this.type
    }

        public setSize(size: FanSize) {
        this.size = size
    }

    public getSize() {
        return this.size
    }
        public setColor(color: FanColor) {
        this.color = color
    }

    public getColor() {
        return this.color
    }
        public setSpeed(speed: FanSpeed) {
        this.speed = speed
    }

    public getSpeed() {
        return this.speed
    }
}

const fan1 = new Fan('Sony', 'medium', 'white')

fan1.setType('samsung')
fan1.setSize('large')
fan1.setColor('black')
fan1.setSpeed(3)


console.log(fan1.type)
console.log(fan1.size)
console.log(fan1.color)
console.log(fan1.speed)
