function Car(make, model) {
  this.make = make;
  this.model = model;
}
Car.prototype.getMakeModel = function() {
  return `${this.make} ${this.model}`;
};
function SportsCar(make, model, topSpeed) {
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;
SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
};
let myCar = new Car("Toyota", "Camry");
console.log(myCar.getMakeModel());

let mySportsCar = new SportsCar("Ferrari", "488 GTB", 330);
console.log(mySportsCar.getMakeModel()); 
console.log(mySportsCar.getTopSpeed()); 

