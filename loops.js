//loops and writing functions.
//DRY PRINCIPLE: Don't Repeat Yourself.
//A function is a block of code that performs a specific task.
//Functions are reusable, they can be called multiple times in a program.
//Functions can take parameters, which are values that are passed to the function when it is called.
//Functions can return values, which are the output of the function.

//Example of a function that takes parameters and returns a value:
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Output: 5
console.log(add(10, 20)); // Output: 30

//How to output "PETER" 10 times
//example of repetition
console.log("peter");
console.log("peter");
console.log("peter");
console.log("peter");
console.log("peter");
console.log("peter");
console.log("peter");
console.log("peter");
console.log("peter");
console.log("peter");

//LOOP EXAMPLE
for (initialization; condition; increment/decrement) {
  // code to be executed
}

//example of a loop that outputs "PETER" 10 times:
for (let i = 0; i < 10; i++) {
  console.log("PETER");
}

//example of a loop that outputs the numbers from 0 to 10 (ascending order):
for (let i = 0; i <= 10; i = i + 1) {
  console.log(i);
}

//example of a loop that outputs the numbers from 10 to 0 (descending order):
for (let i = 10; i >= 0; i = i - 1) {
  console.log(i);
}

while (condition) {
  // code to be executed
}

let i = 10;
while (i >= 0) {
  console.log(i);
  i -= 1;
}
//output the numbers from 10 to 0 using a while loop.
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

let j = 0;
while (j <= 10) {
  console.log(j);
  j += 1;
}
//output the numbers from 0 to 10 using a while loop.
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10  
//breakout session; print all the numbers divisible by two between 0 and 20 using for loop and while loop.
//using for loop
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//using while loop
let k = 0;
while (k <= 20) {
  if (k % 2 === 0) {
    console.log(k);
  }
  k += 2;
}

//arrays
//an array is a data structure that can hold multiple values of the same type.
//arrays are ordered, meaning that the values are stored in a specific order and can be accessed using an index.
//arrays are mutable, meaning that the values can be changed after they are created.

let fruits = ["apple", "banana", "orange", "grape"];
console.log(fruits[0]); // Output: apple
console.log(fruits[1]); // Output: banana
console.log(fruits[2]); // Output: orange
console.log(fruits[3]); // Output: grape

//example of a loop that outputs all the elements of an array:
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//example of a loop that outputs all the elements of an array using a while loop:
let l = 0;
while (l < fruits.length) {
  console.log(fruits[l]);
  l += 1;
}

//example of a function that takes an array as a parameter and returns the sum of all the elements in the array:
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

let numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // Output: 15   

//example of a function that can add and remove elements from an array
function addElement(arr, element) {
  arr.push(element);
  return arr;
}

function removeElement(arr, element) {
  let index = arr.indexOf(element);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}
let myArray = [1, 2, 3];
console.log(addElement(myArray, 4)); // Output: [1, 2, 3, 4]
console.log(removeElement(myArray, 2)); // Output: [1, 3, 4]

//example of a function that can push and pop elements from an array
function pushElement(arr, element) {
  arr.push(element);
  return arr;
}

function popElement(arr) {
  arr.pop();
  return arr;
}

let myArray2 = [1, 2, 3];
console.log(pushElement(myArray2, 4)); // Output: [1, 2, 3, 4]
console.log(popElement(myArray2)); // Output: [1, 2, 3]

//exapmle
let sdft17 = ["gabriel", "john", "michael" ]
console.log(sdft17

);// Output: ["gabriel", "john", "michael"]

sdft17.push("sarah");
console.log(sdft17); // Output: ["gabriel", "john", "michael", "sarah"]

sdft17.pop();
console.log(sdft17); // Output: ["gabriel", "john", "michael"]

sdft17.unshift("sarah");
console.log(sdft17); // Output: ["sarah", "gabriel", "john", "michael"]

sdft17.shift();
console.log(sdft17); // Output: ["gabriel", "john", "michael"]

//figure our how to output sdft17 without repeating the code multiple times using indexing.
console.log(sdft17[0]); // Output: "gabriel"
console.log(sdft17[1]); // Output: "john"
console.log(sdft17[2]); // Output: "michael"

//or we can use a loop to output all the elements in the array without repeating the code multiple times.

for (let i = 0; i < sdft17; i++) {
  console.log(sdft17[i]);
}

//functions in arrays
//example of a function that takes an array as a parameter and returns the length of the array:
function arrayLength(arr) {
  return arr.length;
}

console.log(arrayLength(sdft17)); // Output: 3

//example of a function that takes an array as a parameter and returns the first element of the array:
function firstElement(arr) {
  return arr[0];
}

console.log(firstElement(sdft17)); // Output: "gabriel"

//example of a function that takes an array as a parameter and returns the last element of the array:
function lastElement(arr) {
  return arr[arr.length - 1];
}

console.log(lastElement(sdft17)); // Output: "michael"

