/*

El objetivo de crear una clase airport que modele las caracteristicas y operaciones de un aeropuerto
de forma mas avanzada.

Cada aeropurto tiene:

Un nombre.
Una ubicacion.
Una pista de aterrizaje (runway).
Un nivel de trafico aereo (bajo, medio, alto).
La clase debe incluir:

Un metodo changeTrafficLevel que permita cambiar el nivel de trafico aereo.
Un metodo emergencyLanding que cierre la pista de aterrizaje y marque el nivel de trafico como alto.
Un metodo displayInfo que muestre el nombre del aeropuerto, la ubicacion y  el estado actual de la
pista y el nivel de trafico.
Crea una instancia de la clase Aierport y demuestra el uso de estos metodos con distintas operaciones.

*/

type TrafficLevel = "low" | 'middle' | 'high'

class Airport {
    private _name: string
    private _location: string
    private _runwayStatus: boolean
    private _trafficLevel: TrafficLevel

    constructor(name: string, location: string) {
        this._name = name
        this._location = location
        this._runwayStatus = true
        this._trafficLevel = 'low'
    }
    get runwayStatus(): boolean {
        return this._runwayStatus
    }

    set runwayStatus(status: boolean) {
        this._runwayStatus = status
    }

    get trafficLevel(): TrafficLevel {
        return this._trafficLevel
    }
        set trafficLevel(level: TrafficLevel) {
        this._trafficLevel = level
    }

    changeTrafficLevel(level: TrafficLevel): void {
        this.trafficLevel = level
        console.log(`El nivel de trafico se a cambiado a ${level}. en el aeropuerto ${this._name}`)
    }

    emergencyLanding(): void {
        this.runwayStatus = false
        this.trafficLevel = 'high'
        console.log(`Aterrizaje de emergencia en el aeropuerto ${this._name}.las pista de aterrizaje y el nivel de trafico es alto`)
    }

    displayInfo(): void {
        console.log(`Nombre: ${this._name}`)
        console.log(`Ubicacion: ${this._location}`)
        console.log(`Estado de la pista: ${this.runwayStatus}`)
        console.log(this.trafficLevel)
        
    }
}
    const myAirport = new Airport('Aeropuerto Internacional', 'Ciudad ABC')

    myAirport.displayInfo()
    myAirport.changeTrafficLevel('middle')
    myAirport.displayInfo()
    myAirport.emergencyLanding()
    myAirport.displayInfo()




