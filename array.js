let fruits = [ 'banana', 'apple', 'strawberry', 'peach', 'cranberry', 'strawberry', 'raspberry', 'apple']

const moreThanEight = fruits.filter (fruits => fruits.length > 8);

if (moreThanEight.length){
    console.log( moreThanEight)
} else {
    console.log("Sorry, nothing to show!")
}
