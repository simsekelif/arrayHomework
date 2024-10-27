// Given: An array with fruits: "banana", "apple", "strawberry", "peach", "cranberry", "strawberry", "raspberry”, “apple”
//Check, if there are elements (strings) longer than 8 chars and print out the result

let fruits = [ 'banana', 'apple', 'strawberry', 'peach', 'cranberry', 'strawberry', 'raspberry', 'apple']

const moreThanEight = fruits.filter (fruits => fruits.length > 8);

if (moreThanEight.length){
    console.log( moreThanEight)
} else {
    console.log("Sorry, nothing to show!")
}
