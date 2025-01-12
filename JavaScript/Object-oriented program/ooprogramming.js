// Task 1: Code a Person class
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy; 
    }
    sleep() {
        this.energy += 10;
    }
    doSomethingFun() {
        this.energy -= 10;
    }
}

// Task 2: Code a Worker class
class Worker extends Person {
    constructor(name, age, energy, xp = 0, hourlyWage = 10) {
        super(name, age, energy); 
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    gotToWork() {
        this.xp += 10;
    }
}

// Task 3: Code a Manager class (inherits from Worker)
class Manager extends Worker {
    constructor(name, age, energy, xp = 0, hourlyWage = 30) {
        super(name, age, energy, xp, hourlyWage);
        this.role = "Manager";
    }
}

// Task 4: Code an intern object, run methods
function intern() {
    let internStudent = new Worker("Bob", 21, 110, 0, 10);
    internStudent.gotToWork();
    return internStudent;
}

// Task 5: Code a manager object, methods
function manager() {
    let ManagerAlice = new Manager("Alice", 30, 120, 100, 30);
    ManagerAlice.doSomethingFun();
    return ManagerAlice;
}

console.log(intern());
console.log(manager());
