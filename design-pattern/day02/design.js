class AuthServiceInterface {
  authenticateUser(username, password) {}
  validateToken(token) {}
}

class AuthenticationService extends AuthServiceInterface {
  constructor(databaseService) {
    super();
    this.databaseService = databaseService;
  }

  authenticateUser(username, password) {
    const user = this.databaseService.getUserByUsername(username);
    if (user && user.password === password) {
      const token = generateToken(user);
      return token;
    }
    return null;
  }

  validateToken(token) {
    const decodedToken = decodeToken(token);
    if (decodedToken && isTokenValid(decodedToken)) {
      return true;
    }
    return false;
  }
}

class DatabaseServiceInterface {
  getUserByUsername(username) {}
}

class DatabaseService extends DatabaseServiceInterface {
  constructor() {
    super();
    this.users = [
      { username: "user1", password: "pass1" },
      { username: "user2", password: "pass2" },
    ];
  }

  getUserByUsername(username) {
    return this.users.find((user) => user.username === username);
  }
}

function generateToken(user) {}
function decodeToken(token) {}
function isTokenValid(token) {}

const databaseService = new DatabaseService();
const authService = new AuthenticationService(databaseService);

const token = authService.authenticateUser("user1", "pass1");
if (token) {
  const isValidToken = authService.validateToken(token);
  if (isValidToken) {
    console.log("User is authenticated.");
  } else {
    console.log("Invalid token.");
  }
} else {
  console.log("Authentication failed.");
}

// Assignment 02
class ShipmentServiceInterface {
  createShipment(shipper, shipmentDetails) {}
}

class PlaygroundShipmentService extends ShipmentServiceInterface {
  createShipment(shipper, shipmentDetails) {
    // Implementation for creating Playground shipments
  }
}

class AirShipmentService extends ShipmentServiceInterface {
  createShipment(shipper, shipmentDetails) {
    // Implementation for creating Air shipments
  }
}

class Shipment {
  constructor(pickupDate, deliveryDate, commodities, shipFrom, shipTo) {
    this.pickupDate = pickupDate;
    this.deliveryDate = deliveryDate;
    this.commodities = commodities;
    this.shipFrom = shipFrom;
    this.shipTo = shipTo;
  }
}

class ShipmentBuilder {
  setPickupDate(date) {}
  setDeliveryDate(date) {}
  setCommodities(commodities) {}
  setShipFrom(location) {}
  setShipTo(location) {}
  build() {}
}

class CustomerRequirements {
  // Define customer requirements here
}

// Usage
const customerRequirements = new CustomerRequirements();
const shipmentBuilder = new ShipmentBuilder();

shipmentBuilder.setPickupDate("2023-08-30");
shipmentBuilder.setDeliveryDate("2023-09-05");
shipmentBuilder.setCommodities(["Product A", "Product B"]);
shipmentBuilder.setShipFrom("Location A");
shipmentBuilder.setShipTo("Location B");

const shipment = shipmentBuilder.build();

const shipper = "Shipper Name";
const shipmentService = new PlaygroundShipmentService();

shipmentService.createShipment(shipper, shipment);

//  assignment 03

class RoleCheckerInterface {
  hasRole(userRoles, targetRole) {}
}

class MaximizedRoleChecker extends RoleCheckerInterface {
  hasRole(userRoles, targetRole) {
    return userRoles.includes(targetRole);
  }
}

class MinimizedRoleChecker extends RoleCheckerInterface {
  hasRole(userRoles, targetRole) {
    return !userRoles.includes(targetRole);
  }
}

class User {
  constructor(roles) {
    this.roles = roles;
  }
}

// Usage
const userRoles = ["admin", "manager", "employee"];
const user = new User(userRoles);

const roleToCheck = "admin";
const maximizedRoleChecker = new MaximizedRoleChecker();
const minimizedRoleChecker = new MinimizedRoleChecker();

const hasMaximizedRole = maximizedRoleChecker.hasRole(user.roles, roleToCheck);
const hasMinimizedRole = minimizedRoleChecker.hasRole(user.roles, roleToCheck);

console.log(`User has maximized role: ${hasMaximizedRole}`);
console.log(`User has minimized role: ${hasMinimizedRole}`);
