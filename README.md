1. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with their data type.

```js
const name = "manish"
console.log(typeof(name))

const boolean= true
console.log(typeof(boolean))

const undefined
console.log(typeof(undefined))

const null= null
console.log(typeof(null))

```

2. Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.

```js
const first_name= "negar"
const last_name ="a"
const marital_status= "married"
const country = "sweden"
const age = 31

console.log('my name is ${first_name} ${last_name}. I am ${marital_status} and I live in ${country} and i am ${age} years old.')

```

3. Declare a varibale and assign string value to it and change all the string characters to capital letters using toUpperCase() method.

```js
const text= " i am learning js"
const big_letters = text.toUpperCase()
console.log(big_letters)

```

4. Declare a varibale and assign string value to it and check if the string contains a word Script using includes() method.

```js
const text= " i am learning js"
const find_word = text.includes("Script")
console.log(find_word)

```

5. Declare a varibale and assign string value to it and then split it into an array using split() method.

```js
const text= " i am learning js"
const myArray = text.split(" ")
console.log(myArray)

```

6. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

```js
const company = "facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
console.log(company.split(", "));

```

7. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "manish negar "

```js
const fruits = ["Banana", "Orange", "Apple", "Mango", "manish negar"]
const position_word = fruits.lastIndexOf("manish negar")
console.log(position_word);

```


1. Declare a variable and assign a string value to it, then find its length using the `length` property.  

```js
const text= " i am learning js"
const myLength = text.length( )
console.log(myLength)

```

2. Declare a variable and assign a string value, then use the `charAt()` method to get the character at the 5th index.  

```js
const text= " i am learning js"
const find_character = text.charAt( 5 )
console.log(find_character)

```

3. Declare a variable and assign a number to it, then convert it to a string using the `toString()` method.  

```js
const number = 31
const convert_to_string = number.toString( )
console.log(convert_to_string)

```

4. Declare a variable and assign a string value, then use the `substring()` method to extract the first 5 characters.  

```js
const text= " i am learning js"
const extract_character = text.substring( 5 )
console.log(extract_character)

```

5. Declare a variable and assign a string value, then replace a word in the string with another word using the `replace()` method.  

```js
const text= "i am learning js"
const replace_word = text.replace('js','python')
console.log(replace_word)
```

6. Declare a variable and assign a string value, then check if the string starts with a specific word using the `startsWith()` method.  

```js
const text= "i am learning js"
const check_starts_with_specific_word = text.startsWith("i")
console.log(check_starts_with_specific_word)

```

7. Declare an array containing multiple numbers and find the length of the array using the `length` property.  

```js
const numbers = [31 , 32 , 33 , 34]
const length = numbers.length
console.log(length)

```

8. Declare an array with some elements, then add a new element at the end using the `push()` method.  

```js
const numbers = [31 , 32 , 33 , 34]
const add_element = numbers.push(40)
console.log(add_element)

```

9. Declare an array and remove the last element using the `pop()` method, then display the updated array. 

```js
const numbers = [31 , 32 , 33 , 34]
const remove_element = numbers.pop(33)
console.log(remove_element)

```

10. Declare an array, then join all its elements into a single string using the `join()` method.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"]
const text = fruits.join(' ')
console.log(text)

```
1. **Print Numbers:**
   - Write a `for` loop to print numbers from **1 to 10**.
   
   ```javascript
    for(let i=1; i<= 10 ; i++){
      console.log(i);
    }
   ```

2. **Even Numbers:**
   - Print all **even numbers** between **1 and 20**.

   ```javascript
    for(let i=2 ; i<= 20 ; i=i+2){
      console.log(i);
    }
   ```

3. **Sum of Numbers:**
   - Use a `for` loop to find the **sum of numbers from 1 to 100**.

   ```javascript
   let sum=0
   for(let i=1 ; i<= 100 ; i++){
      sum=sum+i
   }
   console.log(sum);
   ```

4. **Multiplication Table:**
   - Print the **multiplication table of 5** using a `for` loop.

   ```javascript
    for(let i=0 ; i<= 10 ; i++){
      multiplication= 5 * i
      console.log(multiplication);
    }
   ```

5. **Array Elements:**
   - Given an array, print each element:


   ```javascript
   const fruits = ["apple", "banana", "orange"];
   for(let i=0 ; i< fruits.length ; i++){
      console.log(fruits[i]);
   }
   ```

6. **Count Down:**
   - Write a `for` loop to **count down from 10 to 1** and print each number.

   ```javascript
   for(let i=10 ; i>0 ; i--){
      console.log(i);
   }
   ```

7. **Factorial:**
   - Calculate the **factorial** of a number using a `for` loop.
     - Example: `5! = 5 × 4 × 3 × 2 × 1 = 120`

   ```javascript
   let fact=1
   for(let i=5 ; i>=1 ; i--){
      fact= fact * i 
   }
   console.log(fact);
   ```

---

8. **FizzBuzz Challenge:**
   - Write a program that prints numbers from **1 to 50**:
     - For multiples of **3**, print **"Fizz"**.
     - For multiples of **5**, print **"Buzz"**.
     - For multiples of **both 3 and 5**, print **"FizzBuzz"**.

   ```javascript

   for(let i=1 ; i<=50 ; i++){
      if (i % 3 == 0){
         console.log("Fizz");
      }
      else if (i % 5 == 0){
         console.log("Buzz");
      }
      else if (i % 3 == 0 & i % 5 == 0){
         console.log("FizzBuzz");
      }
      else {
         console.log(i);
      }
   }
   ```

9. **Find the Largest Number:**
   - Write a function to find the **largest number** in an array.


   ```javascript
   const numbers = [3, 7, 2, 9, 5];
   max=0
   for(let i=0 ; i<numbers.length ; i++){
      if (i > max){
         max = i
      }


   }
   console.log(findLargest(numbers)); // Output: 9
   ```

10. **Reverse a String:**
    - Create a function that **reverses a string** using a `for` loop.
      ```javascript
      console.log(reverseString("hello")); // Output: "olleh"
      ```

