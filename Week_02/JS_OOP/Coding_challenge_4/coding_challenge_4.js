class CarCI {
    constructor(make, speed) {
        this.make = make
        this.speed = speed
    }

    accelerate() {
        this.speed += 10; 
        console.log(`${this.make} is going at ${this.speed} km/h`);
      }
    
    brake() {
        this.speed -= 5; 
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
}

class EVCl extends CarCI {
    #charge //  riêng tư

    constructor(make, speed, charge) {
        super(make, speed)
        this.#charge = charge // rieng tu
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo
        console.log(`${this.make} is now charged to ${this.#charge}%`);
    }

    accelerate() {
        this.speed += 20;  // Tăng tốc lên 20 km/h
        this.#charge -= 1;  // Giảm mức sạc đi 1%
        console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
    }

    getCharge() {
        return this.#charge;
    }
}

const rivian = new EVCl('Rivian', 120, 23);

rivian.accelerate();
rivian.brake(); 
rivian.chargeBattery(90); 
rivian.accelerate();

console.log(`Current charge of Rivian: ${rivian.getCharge()}%`);