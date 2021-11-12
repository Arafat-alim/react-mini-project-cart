class Vehicle {
  constructor(company) {
    this.car = company;
  }
  getCompany() {
    console.log("this", this);
    console.log("This Company", this.car);
  }
}

//creating a new instance
let car = new Vehicle("Audii");

console.log(car.getCompany()); //
/* Object { car: "Audii" }
debugger eval code:6:13
This Company Audii */
let func = car.getCompany;
func(); //Uncaught TypeError: func.getCompany is not a function

//! fix the problem
let fun = car.getCompany(car);
fun();
