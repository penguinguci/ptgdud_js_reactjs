function Car(make, speed) {
    this.make = make;  
    this.speed = speed;  
}

Car.prototype.accelerate = function() {
    this.speed += 10; 
    console.log(`${this.make} is going at ${this.speed} km/h`);
};
  

Car.prototype.brake = function() {
    this.speed -= 5;  
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

// ke thua Car
function EV(make, speed, charge) {
    Car.call(this, make, speed)
    this.charge = charge
}

// ke thua phuong thuc 'accelerate' tu lop 'Car'
EV.prototype = Object.create(Car.prototype) // thiết lập EV là lớp con của car
EV.prototype.constructor = EV // đặt lại constructor EV


EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo
    console.log(`${this.make} is now charged to ${this.charge}%`)
}

EV.prototype.accelerate = function() {
    this.speed += 20
    this.charge -= 1    
    console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`);
}

const tesla = new EV('Tesla', 120, 23)

tesla.accelerate(); 
tesla.brake();  
tesla.chargeBattery(90);  
tesla.accelerate(); 