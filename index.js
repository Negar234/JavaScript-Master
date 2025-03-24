// Question 1: Declare variables with different data types
const name = "John";
// console.log(typeof(name));

const boolean = true;
// console.log(typeof(boolean));

let location;
// console.log(typeof(location));

const text = null;
// console.log(typeof(text));

// Question 2: Store personal details and display using interpolation
const first_name = "Negar";
const last_name = "A";
const marital_status = "Married";
const country = "Sweden";
const age = 31;
// console.log(`My name is ${first_name} ${last_name}. I am ${marital_status} and I live in ${country} and I am ${age} years old.`);

// Question 3: Convert string to uppercase
const text1 = "i am learning js";
// console.log(text1.toUpperCase());

// Question 4: Check if string contains "Script"
// console.log(text1.includes("Script"));

// Question 5: Split string into an array
// console.log(text1.split(" "));

// Question 6: Split companies string into an array
const companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
// console.log(companies.split(", "));

// Question 7: Find last index of a word in an array
const fruits = ["Banana", "Orange", "Apple", "Mango", "manish negar"];
// console.log(fruits.lastIndexOf("manish negar"));

// Question 8: Find string length
// console.log(text1.length);

// Question 9: Get character at 5th index
// console.log(text1.charAt(5));

// Question 10: Convert number to string
const number = 31;
// console.log(number.toString());

// Question 11: Extract first 5 characters using substring()
// console.log(text1.substring(0, 5));

// Question 12: Replace word in a string
const text2 = "I am learning js";
// console.log(text2.replace("js", "python"));

// Question 13: Check if string starts with a specific word
// console.log(text2.startsWith("I"));

// Question 14: Find length of an array
const numbers = [31, 32, 33, 34];
// console.log(numbers.length);

// Question 15: Add element to end of an array using push()
// numbers.push(40);
// console.log(numbers);

// Question 16: Remove last element using pop()
// numbers.pop();
// console.log(numbers);

// Question 17: Join array elements into a single string
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits2.join(" "));

// Question 18: Print numbers from 1 to 10 using a for loop
for (let i = 1; i <= 10; i++) {
    // console.log(i);
}

// Question 19: Print even numbers between 1 and 20
for (let i = 2; i <= 20; i += 2) {
    // console.log(i);
}

// Question 20: Sum of numbers from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
// console.log(sum);

// Question 21: Print multiplication table of 5
for (let i = 1; i <= 10; i++) {
    // console.log(`5 x ${i} = ${5 * i}`);
}

// Question 22: Print each element in an array
const fruits3 = ["apple", "banana", "orange"];
for (let i = 0; i < fruits3.length; i++) {
    // console.log(fruits3[i]);
}

// Question 23: Countdown from 10 to 1
for (let i = 10; i > 0; i--) {
    // console.log(i);
}

// Question 24: Find factorial of 5
let fact = 1;
for (let i = 5; i >= 1; i--) {
    fact *= i;
}
// console.log(fact);

// Question 25: FizzBuzz Challenge
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        // console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        // console.log("Fizz");
    } else if (i % 5 === 0) {
        // console.log("Buzz");
    } else {
        // console.log(i);
    }
}

// Question 26: Find the largest number in an array
const numbers2 = [3, 7, 2, 9, 5];
let max = numbers2[0];
for (let i = 1; i < numbers2.length; i++) {
    if (numbers2[i] > max) {
        max = numbers2[i];
    }
}
// console.log(max);

// Question 27: Reverse a string using a for loop
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
// console.log(reverseString("hello"));
