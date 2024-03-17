// An array in JavaScript is a special type of variable that can hold more than one value at a time. It is used to store a collection of data elements, which can be of different types like strings, numbers, objects, or even other arrays. 

// Creating Arrays - We can create an array in JavaScript using square brackets [] and separating the elements with commas.
const myArray = [0, 1, 2, 3, 4, 5, true, "Rishabh"];
// JS arrays are resizable and can be mix of data types
// JS array-copy-operations create shallow copy rather that deep copy
// Shallow copy - A shallow copy of an object is a copy whose properties shares the same reference (point to the same underlying value) as those of the source object from which the copy was made
// Deep copy do not shares the same reference point
// Arrays of JS has lots of methods

// Ways to declare arrays in JS
const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["shaktiman", "naagraj"];
console.log(typeof myArr); // o/p: object

const myArr2 = new Array(1, 2, 3, 4, 5);
console.log(typeof myArr2); // o/p: object
// remember for future:- arrays also have some inbuilt methods like other objects of JS in prototype. see below in notes for more...

// Accessing array objects
console.log(myHeroes[0]);

// Array methods:
/* lets declare an array */ let fruits = ['apple', 'banana', 'orange'];
// 1. length: Property that indicates the number of elements in the array. (note that length is a property not a method same like we have in other objects)
console.log(fruits.length); // Outputs: 3

// 2. push(): Method that adds one or more elements to the end of an array and returns the new length of the array.
fruits.push('peach');
console.log(fruits); // Outputs: ['apple', 'banana', 'orange', 'peach']

// 3. pop(): Method that removes the last element from an array and returns that element.
let lastFruit = fruits.pop();
console.log(lastFruit); // Outputs: 'peach'
console.log(fruits); // Outputs: ['apple', 'banana', 'orange']

// 4. unshift(): Adds one or more elements to the beginning of an array.
// note: - unshift shifts all the values from left to right this makes unshift() method resource consuming.
fruits.unshift('apple', 'kiwi');
console.log(fruits); // Outputs: ['apple', 'kiwi', 'banana', 'orange']

// 5. shift(): Removes the first element from an array and returns that element.
let removedFruit = fruits.shift();
console.log(removedFruit); // Outputs: 'apple'
console.log(fruits); // Outputs: ['banana', 'orange']

// 6. includes(): Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
let isIncluded = fruits.includes('banana');
console.log(isIncluded); // Outputs: true

// 7. indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.
let index = fruits.indexOf('banana');
console.log(index); // Outputs: 1   if element is not present then it will give -1

// 8. join(): Method that joins all elements of an array into a string.
const newArr = fruits.join();
console.log(newArr); // Output: kiwi,apple,banana,orange
console.log(typeof newArr); // Output: string  -- we will learn more about how the array is converted into string

// 9. slice(): Returns a shallow copy of a portion of an array into a new array object.
let fruits1 = ['apple', 'banana', 'orange', 'kiwi'];
let citrus = fruits1.slice(1, 3);
console.log(citrus); // Outputs: ['banana', 'orange']

// 10. splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
let fruits2 = ['apple', 'banana', 'orange', 'kiwi'];
fruits2.splice(1, 3);
console.log(fruits2); // Outputs: ['apple'] note: - all the elements from 1 to 3 are removed and original array is manipulated



// notes: 
// In JavaScript, arrays are objects, and like all objects in JavaScript, they inherit properties and methods from a prototype. The prototype is an object from which other objects inherit properties and methods. It acts as a blueprint for creating objects with shared behavior.

// The prototype of an array in JavaScript is the Array.prototype object. It contains a variety of methods that can be used with arrays. These methods are available to all array instances because every array inherits from Array.prototype.

// Here are some common array methods defined in Array.prototype:

// push(): Adds one or more elements to the end of an array.
// pop(): Removes the last element from an array and returns that element.
// shift(): Removes the first element from an array and returns that element.
// unshift(): Adds one or more elements to the beginning of an array.
// slice(): Returns a shallow copy of a portion of an array into a new array object.
// splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
// concat(): Combines two or more arrays.
// forEach(): Executes a provided function once for each array element.
// map(): Creates a new array populated with the results of calling a provided function on every element in the calling array.
// filter(): Creates a new array with all elements that pass the test implemented by the provided function.
// reduce(): Executes a reducer function on each element of the array, resulting in a single output value.
// indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.
// includes(): Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// And many more...