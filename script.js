// Constructor function for Car
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Method added to Car prototype
Car.prototype.getMakeModel = function() {
  return `${this.make} ${this.model}`;
};

// Constructor function for SportsCar, inheriting from Car
function SportsCar(make, model, topSpeed) {
  // Call Car constructor with make and model
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Inherit Car prototype methods using Object.create
SportsCar.prototype = Object.create(Car.prototype);

// Set SportsCar constructor to itself
SportsCar.prototype.constructor = SportsCar;

// Method added to SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
};

// Example usage:
let myCar = new Car("Toyota", "Camry");
console.log(myCar.getMakeModel()); // Output: "Toyota Camry"

let mySportsCar = new SportsCar("Ferrari", "488 GTB", 330);
console.log(mySportsCar.getMakeModel()); // Output: "Ferrari 488 GTB"
console.log(mySportsCar.getTopSpeed()); // Output: 330

