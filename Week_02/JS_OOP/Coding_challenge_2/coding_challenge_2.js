class CarCI {
    constructor(make, speed) {
        this.make = make
        this.speed = speed
    }

    accelerate() {
        this.speed += 10
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    get speedUS() {
        return this.speed/1.6
    }

    set speedUS(speedInMiles) {
        this.speed = speedInMiles*1.6
    }
}

const ford = new CarCI('Ford', 120)

ford.accelerate();
ford.accelerate();
ford.brake();
ford.brake();

console.log(`Ford's speed in miles per hour is ${ford.speedUS} mph`);

ford.speedUS = 100
console.log(`Ford's new speed in km/h is ${ford.speed}`); 