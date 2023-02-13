const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  constructor(){
    this.stations = {
      "Station 1": [],
      "Station 2": [],
      "Station 3": []
      }
      this.registeredUsers = {};
      }

  registerUser(username, password, age) {
      if(this.registeredUsers[username]) {
        throw new Error("User already registered");
      }

      if (age < 18) {
        throw new Error("Too young to register");
      }

      this.registeredUsers[username] = new User(username, password, age);
         console.log(`User ${username} has been registered`);
         return this.registeredUsers[username];
  }

  loginUser(username, password) {
    const user = this.registeredUsers[username];
    if (!user) {
      throw new Error("Username or password is incorrect");
    }
    try {
      user.login(password);
    } catch (error) {
      throw new Error("Username or password is incorrect");
    }
    console.log(`User ${username} has been logged in`);
    return user;
  }


  logoutUser(username) {
    const user = this.registeredUsers[username];
    if (!user) {
      throw new Error("No such user is logged in");
    }
    user.logout();
    console.log(`User ${username} is logged out`);
  }


  createScooter(station) {
    if (!this.stations[station]) {
      throw new Error("No such station");
    }
    const scooter = new Scooter(Date.now());
    this.stations[station].push(scooter);
    scooter.dock(station);
    console.log(`New scooter created`);
    return scooter;
  }


  dockScooter(scooter, station) {
    if (!this.stations[station]) {
      throw new Error("No such station");
    }
    if (scooter.station === station) {
      throw new Error("Scooter already at station");
    }
    this.stations[station].push(scooter);
    scooter.dock(station);
    console.log(`Scooter is docked`);
  }


  rentScooter(scooter, user) {
    if (scooter.isRented()) {
      throw new Error("Scooter already rented");
    }
    let station = scooter.station;
    let index = this.stations[station].indexOf(scooter);
    if (index === -1) {
      throw new Error("Scooter not found at station");
    }
    this.stations[station].splice(index, 1);
    scooter.rent(user);
    console.log(`Scooter is rented to ${user.name}`);
  }
  
  printUsers() {
    console.log("Registered users:");
    this.users.forEach(user => {
      console.log(`${user.name}`);
    })
  }
  
  printStations() {
    console.log("Scooter stations:");
    Object.keys(this.stations).forEach(station => {
      console.log(`${station}: ${this.stations[station].length} scooters`);
    })
  }


}


module.exports = ScooterApp
