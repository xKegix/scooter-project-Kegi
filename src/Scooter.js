class Scooter{
  // Serial number - make it track.
  // Tracks next serial number assigned to each instance of Scooter class.
  static nextSerial = 1;

  // Need constructor for new instance for Scooter class.
  // Scooters are taken from station, perhaps it could be parameter.
  constructor(station){
    this.station = station;
    this.user = null;

    this.serial = Scooter.nextSerial++;
    this.isBroken = false;
    this.charge = 100;
  }


  rent(user){
    if ((this.charge > 20) && (this.isBroken == false)){
      this.station = null;
      this.user = user;
    } else if (this.charge < 20){
        throw new Error("Scooter needs charge.");
    } else if (this.isBroken) {
      throw new Error("Scooter needs repair.");
    }
  }

  dock(station){
    if(this.user === null) {
      throw new Error("Scooter is already docked.");
    }
    this.station = station;
    this.user = null;
  }

  recharge() {
    // if user take out scooter.
    if(this.user) {
      throw new Error("Scooter is checked out, cannot recharge.");
    } 
    // let charge = this.charge;
    let interval = setInterval(() => {
        charge += 5;
        console.log(`Scooter charge: ${charge}%`);
        if (charge >= 100) {
            this.charge = 100;
            clearInterval(interval);
            console.log("Recharge complete");
        }
    }, 1000)
  }

  requestRepair() {
    this.isBroken = true;
      setTimeout(() => {
        this.isBroken = false;
  }, 5000);
  }

}

module.exports = Scooter
