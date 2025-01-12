let greet = "Hello";
let place = "World";
console.log(`${greet} ${place} !`) //display both variables using template literals

//it's possible to perform arithmetic operation inside a template literal expression
console.log(`${1 + 1 + 1 + 1 + 1} stars!`) 

let multiline = `
    Hello
    World
    !
`;

console.log(multiline);

//combine
let first = "ES6 has some great features!";
let second = "Want to know more ?";
console.log(`${first} ${second} Then keep on learning!`)