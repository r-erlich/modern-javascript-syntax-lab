const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here

const newArray = nums.map(nums => nums * 2);
console.log(newArray);

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const [topping1, topping2] = pizzaToppings
console.log(topping1, topping2)

const car = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Your code here
  const {make, model} = car

console.log(make, model)

//const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const controversialPizzaToppings = [...pizzaToppings]

console.log (controversialPizzaToppings)

 //const car = {
  //  make: 'Audi',
 //   model: 'q5',
  //};
  
  // Change the `model` property of `myCar` to 'q7'. Log both objects.
  
  // Your code here
  const myCar = {...car}
  myCar.model = 'q7' 
  
  
  console.log(car)
  console.log(myCar)

  // Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here
const propertyName = "age"
const userAge = {
    [propertyName]: 26
}
console.log(userAge)

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here
function theCat(noun =  "cat", color = "white"){
    return(`the ${noun} is ${color}`)
}

console.log(theCat())

// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';

if (pizza === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}

// Your code here
let isTasty = pizza === "tasty" ? "yum" : "yuck";

console.log(`${isTasty}`);

// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: 

// "LANG is equal to localLangConfig or the default value of English."

const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

// Your code here
const LANG = 'en' || localLangConfig
// Log the result
console.log('Language setting:', LANG);

// 2. SET WEBSITE THEME

const userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default

// Your code here
const USER_THEME = userSavedTheme || 'light'
// Log the result
console.log('User theme setting:', USER_THEME);

const adventurer = {
    name: 'Alice',
  };
  
  let cat = adventurer.cat?.age; // Your code here
  
  console.log(cat);