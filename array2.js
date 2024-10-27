let fruit = [
    "banana",
    "apple",
    "strawberry",
    "peach",
    "cranberry",
    "strawberry",
    "raspberry",
    "apple",
];

let similar = [];

for (let index = 0; index < fruit.length; index++) {
    let firstElement = fruit[index];

    for (let j = index + 1; j < fruit.length; j++) {
        let secondElement = fruit[j];

        if (firstElement === secondElement) {
            similar.push(firstElement)
        }
    }
}

const result = fruit.filter((item) => {
    if (item === "apple" || item === "strawberry") {
        return false;
    } else {
        return true;
    }
})

console.log(result);

// //Print out the new array in ascending alphabetical order and each value in UPPERCASE letters

newArrayUpper = result.sort().map(function(element){
    return element.toUpperCase();
});
console.log(newArrayUpper);

