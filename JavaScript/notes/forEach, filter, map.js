
//forEach
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);
console.log("\n");


const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});
console.log("\n");


//filter
const nums = [0,10,20,30,40,50];
const filtered_nums = nums.filter(
    function(num) {
        return num > 20;
    }
)
console.log(filtered_nums);
console.log("\n");


//map
[0, 10, 20, 30, 40, 50].map(function(num) {
    return num / 10; 
}).forEach(num => console.log(num));

