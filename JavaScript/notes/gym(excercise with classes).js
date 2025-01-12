class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}



class Info {
    constructor(AvailableRooms, Location, Temperature) {
        this.AvailableRooms = AvailableRooms;
        this.Location = Location;
        this.Temperature = Temperature;
    }
    
    displayInfo() {
        console.log(`Info   number of rooms: ${this.AvailableRooms}\n` +
                    `       location: ${this.Location}\n` +
                    `       temperatures: ${this.Temperature}\n` +
                    `       for beginners: 10min-medium`)  
    }
}

class Program {
    constructor(schedule) {
        this.schedule = schedule;
    }

    displayProgram() {
        console.log(`Program: ${this.schedule}`);
    }
}


class Steam_bath {
    constructor(AvailableRooms, Location, Temperature) {
        this.info = new Info(AvailableRooms, Location, Temperature);
        this.program = new Program("Every Friday,Saturday\n         17:00-19:00 ");
    }
    
    displayDetails() {
        console.log("OPEN");
        this.info.displayInfo();
        this.program.displayProgram();
    }
}


var boxingGym = new Gym("7-22", "right corner", "left corner")

var SteamBath = new Steam_bath("4", "next to the cardio zone", "high/medium/low");


//boxing gym
console.log(boxingGym.openHrs) 
console.log(boxingGym.stationaryBike) 
console.log(boxingGym.treadmill) 
console.log("");

//steam bath
SteamBath.displayDetails();
