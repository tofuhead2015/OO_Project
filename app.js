class Vehicle {
    constructor (make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }
    honk(){
        return "Beep"
    }
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`
    }
}

class Car extends Vehicle {
    constructor (make, model, year){
        super(make, model, year)
        this.numWheels = 4
    }
}

class Motorcycle extends Vehicle {
    constructor (make, model, year){
        super(make, model, year)
        this.numWheels = 3
    }
    revEngine(){
        return "VROOM!!!"
    }
}
class Garage {
    constructor (capacity){
        this.capacity = capacity
        this.vehicles = []
    }
    add(v){
        if (!(v instanceof Vehicle){
            throw new Error("must be a vehicle")
        }
        if (this.vehicles.lengh >= this.capacity){
            return "Sorry we are full"
        }
        this.vehicles.push(v)
    }
}