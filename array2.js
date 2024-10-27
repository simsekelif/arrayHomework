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

for (let i = 0; i < fruit.length; i++) {
    let firstElement = fruit[i];

    for (let j = i + 1; j < fruit.length; j++) {
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

console.log(similar)
console.log(result);