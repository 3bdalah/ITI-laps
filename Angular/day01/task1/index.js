// task one
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(color, type) {
        this.color = color;
        this.type = type;
    }
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(color, type, price) {
        var _this = _super.call(this, color, type) || this;
        _this.color = color;
        _this.type = type;
        _this.price = price;
        return _this;
    }
    return Car;
}(Vehicle));
var car1 = new Car("black", "BMW", 1000000);
console.log("Car 1: Color - " + car1.color + ", Type - " + car1.type + ", Price - $" + car1.price);
var car2 = new Car("red", "Kia", 300000);
console.log("Car 2: Color - " + car2.color + ", Type - " + car2.type + ", Price - $" + car2.price);
