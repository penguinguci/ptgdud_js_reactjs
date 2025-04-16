// constructor function
function Car(make, speed) {
    this.make = make
    this.speed = speed
}

// method accelerate => tang toc
Car.prototype.accelerate = function() {
    this.speed += 10
    console.log(`${this.make} is going at ${this.speed} km/h`)
}

// medthod brake => giam toc
Car.prototype.brake = function() {
    this.speed -= 5
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

// create object
const bmw = new Car('BMW', 120)
const mercedes = new Car('Mercedes', 95)

bmw.accelerate()
bmw.accelerate()
bmw.brake()
bmw.brake()

mercedes.accelerate()
mercedes.accelerate()
mercedes.brake()
mercedes.brake()