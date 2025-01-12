// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy() {
    for (const product of dairy) {
        console.log(product)
    }
}
logDairy();
console.log("\n");
// Task 2
const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    for (const ability of Object.keys(bird)) {
        console.log(`${ability}: ${bird[ability]}`);
    }
}
birdCan();
console.log("\n");
// Task 3
function animalCan() {
    for (const ability in bird)
        console.log(`${ability}: ${bird[ability]}`)
}
animalCan()
