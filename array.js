// // Given: An array with fruits: "banana", "apple", "strawberry", "peach", "cranberry", "strawberry", "raspberry”, “apple”
// //Check, if there are elements (strings) longer than 8 chars and print out the result

// let fruits = [ 'banana', 'apple', 'strawberry', 'peach', 'cranberry', 'strawberry', 'raspberry', 'apple']

// const moreThanEight = fruits.filter (fruits => fruits.length > 8);

// if (moreThanEight.length){
//     console.log( moreThanEight)
// } else {
//     console.log("Sorry, nothing to show!")
// }
// // //Print out the duplicate values and create a new array without them (not adding them even once) by iterating over its elements (Hint: you need the indexOf function for arrays)
// // Expected Output: “banana”, “peach”, “cranberry”, “raspberry"

// let fruit = [ 'banana', 'apple', 'strawberry', 'peach', 'cranberry', 'strawberry', 'raspberry', 'apple']






// //Print out the new array in ascending alphabetical order and each value in UPPERCASE letters
let newArray = [ 'banana', 'peach', 'cranberry', 'raspberry']

newArrayUpper = newArray.sort().map(function(element){
    return element.toUpperCase();
});
console.log(newArrayUpper);