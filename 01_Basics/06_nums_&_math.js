const score = 400;
console.log(typeof score); // o/p: number
console.log(score); // o/p: 400
// const score = 400;: This line declares a constant variable named score and assigns it the primitive value 400.

const balance = new Number(23000); // it ensures the type should be number - [100%]
// const balance = new Number(23000);: This line declares a constant variable named balance and assigns it a Number object. The Number object is a built-in JavaScript object type that represents numeric values.
// same as we had lots of prototype methods in String function, we also have lots of prototype methods here also inbuilt in Number object
console.log(typeof balance); // o/p: 
console.log(balance); // o/p: [Number: 23000]

// The Number object in JavaScript comes with several prototype methods that allow you to perform various operations on numeric values. Here are some examples of prototype methods of the Number object:

// --Methods------------------------ //
// 1. toFixed(): This method converts a number into a string, rounding the number to a specified number of decimal places.
// note: this is an important method
const num1 = 10.299;
console.log(num1.toFixed(2)); // Output: "10.300"

// 2. toPrecision(): This method formats a number to a specified length.
// note: it is a very tricky method so use it carefully
const num2 = 123.456;
console.log(num2.toPrecision(4)); // Output: "123.5"

// 3. toString(): This method converts a number to a string.
const num3 = 123;
console.log(num3.toString()); // Output: "123"

// 4. toLocaleString(): This method converts a number into a string using a locale-specific format.
const num4 = 123456.789;
console.log(num4.toLocaleString('en-US')); // Output: "123,456.789"
console.log(num4.toLocaleString('en-IN')); // Output: "1,23,456.789"

// 5. valueOf(): This method returns the primitive value of a Number object.
const num5 = new Number(10);
console.log(num5.valueOf()); // Output: 10

// 6. isNaN(): This method determines whether a value is NaN (not a number).
const num6 = NaN;
console.log(Number.isNaN(num6)); // Output: true

// 7. sInteger(): This method determines whether a value is an integer.
console.log(Number.isInteger(5)); // Output: true
console.log(Number.isInteger(5.5)); // Output: false

// 8. isFinite(): This method determines whether a value is a finite number.
console.log(Number.isFinite(5)); // Output: true
console.log(Number.isFinite(Infinity)); // Output: false

// ----Properties---------------------- //
// Certainly! The Number object in JavaScript also comes with some useful properties that provide information about numbers. Here are some examples of properties of the Number object:

// 1. Number.MAX_VALUE: This property represents the maximum numeric value representable in JavaScript.
console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308

// 2. Number.MIN_VALUE: This property represents the minimum positive numeric value representable in JavaScript.
console.log(Number.MIN_VALUE); // Output: 5e-324

// 3. Number.POSITIVE_INFINITY: This property represents positive infinity, which is returned on overflow.
console.log(Number.POSITIVE_INFINITY); // Output: Infinity

// 4. Number.NEGATIVE_INFINITY: This property represents negative infinity, which is returned on overflow.
console.log(Number.NEGATIVE_INFINITY); // Output: -Infinity

// 5. Number.NaN: This property represents "Not-a-Number" value.
console.log(Number.NaN); // Output: NaN

// 6. Number.EPSILON: This property represents the difference between 1 and the smallest floating-point number greater than 1.
console.log(Number.EPSILON); // Output: 2.220446049250313e-16

// 7. Number.MAX_SAFE_INTEGER: This property represents the maximum safe integer in JavaScript.
console.log(Number.MAX_SAFE_INTEGER); // Output: 9007199254740991

// 8. Number.MIN_SAFE_INTEGER: This property represents the minimum safe integer in JavaScript.
console.log(Number.MIN_SAFE_INTEGER); // Output: -9007199254740991



// +++++++++++++++++++++++++++++++++++++++++++  Maths  +++++++++++++++++++++++++++++++++++++++++++++ //


// JavaScript provides the Math object, which contains a set of properties and methods for performing mathematical operations. Here's an overview of some commonly used properties and methods of the Math object:



// notes:
// there are 2 things associated with Number object 1 is methods which have () at the end and the 2nd is property which does not have ()
