// // Write a function named greet and console.log(something)


function greet(hey) {
    console.log("hey")
}
greet()
    //     // Write a function named greet, which contains a parameter called name, and in the
    //     //  function, there would be console.log("Hi" + name)


function greet(name) {
    console.log("hi" + " " + name)
}
greet("maggie")

// // Write a function to calculate the sum of 
// //  two numbers (there would be 2 parameter in the function)

function sum(a, b) {
    let sum = a + b
    console.log(sum)
}
sum(5, 6)

// // Write a function to double value of number 
function doubleValue(a) {
    let doubleValue = a * 2
    console.log(doubleValue)
}
doubleValue(9)

// // filter() 
let input = [1, -4, 12, 0, -3, 29, -150]
    // // Return a new array contains number bigger than 0

// let input = [1, -4, 12, 0, -3, 29, -150]
let larger = input.filter((input) => {
    return input > 0
})
console.log(larger)

// // Return a new array contains number less than 10

let lesser = input.filter((input) => {
    return input < 10
})
console.log(input)


// // forEach() 
// // let numbers = [1, 2, 3, 4, 5].
// // Using forEach to console.log the element in the array

let numbers = [1, 2, 3, 4, 5]

numbers.forEach((item) => {
    console.log(item)
})


// // Using forEach to console.log the element with its index in the array
//  let numbers = [1, 2, 3, 4, 5]
numbers.forEach(Position);

function Position(item, index, array) {
    console.log(item, index)
}

// // Sum array of element using forEach method
let nums = [1, 2, 3, 4, 5]
let sumed = 0;
nums.forEach((item) => {
    return sumed += item
})
console.log(sumed)
    //     // map() 
    //     // let number = [25, 45, 55, 77, 88, 99];
    //     // Using map() to square each number in the array
let numb = [25, 45, 55, 77, 88, 99];

let squares = numb.map((numb) => {
    return numb * numb

})
console.log(squares)



// // Using map() to return a new array the sum  element
// // let number = [25, 45, 55, 77, 88, 99];

let sums = numb.map((numb) => {
    return numb + numb

})
console.log(sums)

// // Using map() to return a new array that the first letter in the word would be uppercase


let strings = ["avengers", "captain america", "ironman", "black panther"];
let capital = strings.map((strings) => {
    return strings.charAt(0).toUpperCase() + strings.slice(1);

})
console.log(capital)



// // Using filter() to return new array that contains even number

let number = [25, 45, 55, 77, 88, 99];

let even = number.filter((number) => {
    return number % 2 == 0
})
console.log(even)
    //     // Using filter() to return new array that contains odd number

let odd = number.filter((number) => {
    return number % 2 == 1
})
console.log(odd)

const characters = [{
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];
// // 1. Get characters with mass greater than 100
let less = characters.filter((characters) => {
    return (characters.mass > 100)
})
console.log(less)
    //     // 2.  Get characters with height less than 200
let height = characters.filter((characters) => {
    return characters.height < 200
})
console.log(height)


// // 3. Get all male characters

let male = characters.filter((characters) => {
    return characters.gender == 'male'
})
console.log(male)
    //     // 4. Get all female characters
let female = characters.filter((characters) => {
    return characters.gender == 'female'
})
console.log(female)

// // Array

// // Sort the array in alphabetically 
let vegetables = ["garlic", "carrot", "broccoli", "pumpkin"]
vegetables.sort()
console.log(vegetables)


// // 2. What is the length of the array 
// 4
// // 3. Write a function called myVeggieList to console.log() the length of the array 
function myVeggieList() {
    return vegetables.length
}
console.log(myVeggieList())
    //     // 4. Push one more item to the array called "onion"
    // let vegetables = ["garlic", "carrot", "broccoli", "pumpkin"]
vegetables.push("onions")
console.log(vegetables)

// // 5. Write a function using if-else condition to check if the length of the array bigger than 4. 
// let vegetables = ["garlic", "carrot", "broccoli", "pumpkin", "onion"]
if (vegetables.length > 4) {
    console.log("length more than 4")
} else {
    console.log("length less than 4")
}

// // 6.  Using forEach or map to loop and console.log() the item in the array
// // let vegetables = ["garlic", "carrot", "broccoli", "pumpkin", "onion"]
vegetables.forEach((item) =>
    console.log(item))

// // Object 
// // console.log the student name 
// /// console.log the student class
// //console.log the student age
let student = {
    name: "David Rayy",
    class: "math",
    age: 12
};
console.log(student.name)
console.log(student.class)
console.log(student.age)