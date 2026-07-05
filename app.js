// Question 1: Variable Declarations and Initialization
// Create three variables: productName (string with value "Laptop"), 
// price (number with value 999.99), and inStock (boolean with value true). 
// Console.log all three variables in a single statement.


let productName = 'Laptop';
let price = 999.99;
let inStock = true;
console.log(productName, price, inStock);

// Question 2: Mathematical Operations
// Calculate and display:

// The remainder when 27 is divided by 4
// The square of 12 (using exponentiation operator **)
// The result of incrementing 8 by 1 using the ++ operator
// The result of decrementing 15 by 2 using the -= operator

let remainder = 27 % 4;
console.log(remainder);

let square = 12 ** 2;
console.log(square);

let increment = 8;
increment++;
console.log(increment);


let decrement = 15;
decrement -= 2
console.log(decrement);

//  Question 3: String Concatenation and Case Conversion
// Create two string variables: firstName = "alex" and lastName = "SMITH".
//  Concatenate them with a space, 
//  then convert the result to proper case (first letter uppercase, rest lowercase).
//   Also find the total length of the full name.

let firstName = "alex";
let lastName = "SMITH";
let CaseFullName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLocaleLowerCase() + " " + lastName.charAt(0).toUpperCase() + lastName.slice(1).toLocaleLowerCase();
console.log(CaseFullName);
console.log(CaseFullName.length);


// Question 4: if-else Conditional Logic
// Write an if-else statement that checks a temperature variable.
//  If temperature is above 30, console.log "Hot day".
//  If between 20 and 30 (inclusive), console.log "Pleasant day".
//  Otherwise, console.log "Cold day". Test with temperature = 25.
let temperature = 25;
if (temperature > 30) {
    console.log("Hot day");
}
else if (temperature >= 20 && temperature <= 30) {
    console.log("Pleasant day");
}
else {
    console.log("Cold day");
}



// Question 5: Comparison Operators
// Create three comparison operations:

// Check if 15 is strictly equal to "15"
// Check if 20 is greater than 15 AND less than 25
// Check if 10 is not equal to 10 OR 5 is greater than 3

console.log(15 === '15');
console.log(20 > 15 && 20 < 25);
console.log(10 !== 10 || 5 > 3);


// Question 6: Array Manipulation - Basics
// Create an array colors with values ["red", "green", "blue"]. Then:

// Add "yellow" to the end
// Remove the first element
// Insert "purple" at index 1
// Console.log the final array and its length

let arr = ["red", "green", "blue"];
arr.push('yellow');
arr.shift()
arr.splice(1, 0, 'purple')
console.log(arr);


// Question 7: Array Manipulation - splice()
// Start with array fruits = ["apple", "banana", "cherry", "date", "elderberry"]. 
// Use splice() to:

// Remove "cherry"
// Replace "date" with "dragonfruit"
// Extract the middle 3 elements into a new array

let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
fruits.splice(2, 1);
fruits.splice(2, 1, 'dragonfruit');
console.log(fruits);

let extend = ["apple", "banana", "cherry", "date", "elderberry"];
extend = extend.slice(1, 4);
console.log(extend);


// Question 8: for Loop - Number Sequence
// Write a for loop that prints numbers from 1 to 10, but skips number 5 using continue, 
// and stops at 8 using break. Also calculate the sum of all printed numbers.

let sum = 0;
for (let i = 1; i <= 10; i++) {

    if (i === 5) {

        continue;
    }
    else if (i === 8) {
        break;
    }
    sum += i;
    console.log(i)
}
console.log("Sum:", sum)



// Question 9: Nested for Loop - Pattern
// Write nested for loops to create this pattern:

// *
// **
// ***
// ****
// *****

for (let i = 0; i < 5; i++) {
    let output = ''
    for (let j = 0; j <= i; j++) {
        output += '*'
    }
    console.log(output)
}


// Question 10: String Methods - Search and Extract
// Given text = "The quick brown fox jumps over the lazy dog":

// Find the position of "fox"
// Extract "brown fox" using substring/slice
// Check if the text contains "dog"
// Get the character at position 10
let text = "The quick brown fox jumps over the lazy dog";
console.log(text.indexOf("fox"));
console.log(text.slice(9, 19));
console.log(text.includes('dog'));
console.log(text.charAt(10));


// Get the character at position 10
// Question 11: String Replacement
// Given sentence = "I love JavaScript and JavaScript is awesome":

// Replace the first "JavaScript" with "coding"
// Replace ALL "JavaScript" with "JS"
// Replace "awesome" with uppercase "AWESOME"


let sentence = "I love JavaScript and JavaScript is awesome";
console.log(sentence.replace('JavaScript', 'coding'));
console.log(sentence.replaceAll('JavaScript', 'JS'));
console.log(sentence.replace('awesome', 'AWESOME'));

// Question 12: Number Rounding and Formatting
// Given num = 123.456789:

// Round to 2 decimal places
// Round to nearest integer
// Get the floor value
// Get the ceiling value
// Format to show exactly 4 decimal places
let num = 123.456789;
console.log(num.toFixed(2))
console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))
console.log(num.toFixed(4))

// Question 13: Random Number Generation
// Generate:

// A random integer between 1 and 100 (inclusive)
// A random decimal between 0 and 1 with 3 decimal places
// A random number between 50 and 75 (inclusive)
let RandomNum = Math.floor(Math.random() * 100)
console.log(RandomNum);
console.log(Math.random().toFixed(3));
console.log(Math.floor(Math.random() * (75 - 50 + 1) + 50));


// Question 14: Type Conversion
// Perform these conversions:

// Convert string "123" to number
// Convert string "45.67" to decimal (float)
// Convert number 789 to string
// Check the type of "true" after converting to boolean

let number = '123';
console.log(Number(number));

let str = '45.67';
let convert = parseFloat(str)
console.log(convert);

let string = 123;
console.log(string.toString());
let bole = 'true';
bole = Boolean(bole)
console.log(typeof (bole));




// Question 15: Date and Time Operations
// Create a Date object for the current time and:

// Extract the year, month (0-11), and day
// Get the hours in 24-hour format
// Format it as "YYYY-MM-DD"
// Create a specific date for December 25, 2024


let currentDate = new Date();
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth() + 1)
console.log(currentDate.getDate())
console.log(currentDate.getHours())
let formatDate = currentDate.getFullYear() + '-' +
    (currentDate.getMonth() + 1) + '-' + currentDate.getDate()

console.log(formatDate);
let specific = new Date(2024, 11, 25);
console.log(specific);


// Question 16: Function - Basic Calculator
// Write a function calculate that takes two numbers and an operator (+, -, *, /) 
// as parameters and returns the result.
//  Handle division by zero by returning "Error: Division by zero
function calculate(num1, num2, operoperator) {
    if (operoperator === '+') {
        return num1 + num2
    }
    else if (operoperator === "-") {
        return num1 - num2
    }
    else if (operoperator === '*') {
        return num1 * num2

    }
    else if (operoperator === '/') {
        if (num2 === 0) {
            return "Error: Division by zero";
        }

        return num1 / num2

    }
    return 'invalid operator'
}
console.log(calculate(2, 3, '+'));
console.log(calculate(10, 5, '-'));
console.log(calculate(5, 5, '*'));
console.log(calculate(10, 2, '/'));
console.log(calculate(10, 0, '/'));


// Question 17: Function - Local vs Global Variables
// Create a global variable globalCounter = 0. 
// Write a function incrementCounter that declares a local variable with 
// the same name and increments it, while also incrementing the global variable.
//  Show the difference after calling the function twice.

let globalCounter = 0;
function incrementCounter() {
    let localCounter = 0;
    globalCounter++;
    localCounter++;
    console.log('Global:', globalCounter);
    console.log('Local :', localCounter);


}
incrementCounter()
incrementCounter()

// Question 18: switch Statement - Day of Week
// Write a switch statement that takes a number (0-6) 
// and returns the corresponding day name (0=Sunday, 1=Monday, etc.).
//  Include a default case for invalid numbers.
let daynum = new Date();
let days = daynum.getDay()


switch (days) {
    case 0:
        console.log('sunday');

        break;
    case 1:
        console.log('monday');
        break; case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('invalid numbers');

        break;
}

// Question 19: while Loop - Countdown
// Write a while loop that starts at 10 and counts down to 1, printing each number. 
// Then print "Blast off!". Also calculate the factorial of 5 using a while loop.
let i = 10;
while (i > 0) {
    let j = i--;
    console.log(j);


}
console.log("Blast off!");
let factorial = 1;
let value = 5;
while (value >= 1) {
    factorial *= value
    value--;
}
console.log(factorial);


// Question 20: do...while Loop - User Input Simulation
// Create a do...while loop that simulates asking for a password.
//  Start with enteredPassword = "" and keep "asking" 
// (incrementing a counter) until enteredPassword === "secret123" or 5 attempts are made.

let enteredPassword = "";
let attempts = 0;

do {
    attempts++;
    console.log(`Attempt ${attempts}`);

    if (attempts === 3) {
        enteredPassword = "secret123";
    }

} while (enteredPassword !== "secret123" && attempts < 5);

if (enteredPassword === "secret123") {
    console.log("Access Granted!");
} else {
    console.log("Access Denied! Maximum attempts reached.");
}

// Question 21: Array Methods with for Loop
// Given numbers = [12, 45, 78, 23, 56, 89, 34]:

// Use a for loop to find the maximum value
// Use a for loop to calculate the average
// Create a new array with only numbers greater than 50
// Reverse the array without using reverse() method
let arvalue = [12, 45, 78, 23, 56, 89, 34];

let max = arvalue[0];

for (let i = 1; i < arvalue.length; i++) {
    if (arvalue[i] > max) {
        max = arvalue[i];
    }
}

console.log("Max:", max);

  let sum1 = 0;
  for (let i = 0; i < arvalue.length; i++) {
      sum1 +=arvalue[i]      
  } 
 let aver = sum1 / arvalue.length;
 console.log(aver);
 
  
 let graterthen50 = [];
 for (let i = 0; i < arvalue.length; i++) {
    if (arvalue[i]>50) {
        graterthen50.push(arvalue[i])
    }
 }
 console.log(graterthen50);
 