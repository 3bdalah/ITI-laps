// solve this assignment
// You have been asked to develop an application for a company X.
// The company has only one chief executive officer (CEO) . The
// application store some information a bout the CEO like: name,
// age and address. You need to find a clean and concise
// implementation of the CEO class in the application .
class CEO {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
}
const ceo = new CEO("3bdallah 3bdo ", 25, "123 Main Ashmoon , City Menofiea");
console.log(ceo);

// -You have been hired to develop an application for a car shop. The owner of the car shop wants an easy to navigate interface with the ability to document all the types of vehicles that he fixes in his shop. On a daily basis, through his and his employers hands pass around dozen different types of vehicles
// . You need to find a clean and concise way to insert all those types of cars into your database.

class Vehicle {
  constructor(type, make, model) {
    this.type = type;
    this.make = make;
    this.model = model;
  }
}

const vehicles = [];

vehicles.push(new Vehicle("Car", "Volks", "Camry"));
vehicles.push(new Vehicle("Van", "Tesla", "F-180"));
vehicles.push(new Vehicle("Motorcycle", "Bughaty", "fjnvjf"));

console.log(vehicles);
