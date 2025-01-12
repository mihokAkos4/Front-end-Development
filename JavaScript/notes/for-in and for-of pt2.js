const car = {
    engine: true
}

const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("The sportsCar object: ", sportsCar);

for (prop in sportsCar){
    console.log('for-in: ', prop);                                //prop=speed,engine
}
for(prop of Object.keys(sportsCar)){
    console.log('for-of:', prop + " " + sportsCar[prop]);       //prop=speed;  sportsCar[prop]=fast;
}