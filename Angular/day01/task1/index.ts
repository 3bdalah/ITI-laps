// task one

class Vehicle {
  constructor(public color: string, public type: string) {}
}

class Car extends Vehicle {
  constructor(public color: string, public type: string, public price: number) {
    super(color, type);
  }
}

const car1 = new Car("black", "BMW", 1000000);
console.log(
  `Car 1: Color - ${car1.color}, Type - ${car1.type}, Price - $${car1.price}`
);

const car2 = new Car("red", "Kia", 300000);
console.log(
  `Car 2: Color - ${car2.color}, Type - ${car2.type}, Price - $${car2.price}`
);
