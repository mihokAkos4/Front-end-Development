
var bird = {
    hasWings: true,
    canFly: true,               //create bird object
    hasFeathers: true
}

var eagle1 = Object.create(bird);

console.log("eagle1 has wings:", eagle1.hasWings);
console.log("eagle1 can fly:", eagle1.canFly);
console.log("eagle1 hasFeathers:", eagle1.hasFeathers);

console.log("");   //empty row


var pigeon = Object.create(bird);

console.log("pigeon can fly:", pigeon.canFly);
console.log("pigeon has wings:", pigeon.hasWings);
console.log("pigeon has feathers:", pigeon.hasFeathers);

console.log("");   //empty row


var penguin = Object.create(bird);
penguin.canFly = false;       //set property to false

console.log("penguin can fly:", penguin.canFly);
console.log("penguin has wings:", penguin.hasWings);
console.log("penguin has feathers:", penguin.hasFeathers);

