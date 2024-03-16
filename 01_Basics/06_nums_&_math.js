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
// 1. Math.PI: Represents the mathematical constant π (pi), which is approximately equal to 3.14159.
console.log(Math.PI); // Output: 3.141592653589793

// 2. Math.E: Represents the base of natural logarithms, approximately equal to 2.718.
console.log(Math.E); // Output: 2.718281828459045

// 3. Math.abs(x): Returns the absolute value of a number x.
console.log(Math.abs(-10)); // Output: 10

// 4. Math.round(x): Returns the value of a number x rounded to the nearest integer.
console.log(Math.round(4.6)); // Output: 5

// 5. Math.ceil(x): Returns the smallest integer greater than or equal to a number x.
console.log(Math.ceil(4.2)); // Output: 5

// ceil takes ceiling value like 4.2 ka 5, 5.6 ka 6, 7.3 ka 8
// floor take floor value like 4.2 ka 4, 5.6 ka 5, 7.3 ka 7 etc.

// 6. Math.floor(x): Returns the largest integer less than or equal to a number x.
console.log(Math.floor(4.9)); // Output: 4

// 7. Math.sqrt(x): Returns the square root of a number x.
console.log(Math.sqrt(25)); // Output: 5

// 8. Math.pow(x, y): Returns the base x raised to the exponent y.
console.log(Math.pow(2, 3)); // Output: 8

// 9. Math.random(): Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).
// this is an important method and dev uses the most
console.log(Math.random()); // Output: A random number between 0 and 1
// some exaple of usage:
// generate number between 10 to 20
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min))+min); // Output: "Random number every time b/w 10-20"

// 10. Math.max(x1, x2, ...): Returns the largest of zero or more numbers.
console.log(Math.max(10, 20, 30)); // Output: 30

// 11. Math.min(x1, x2, ...): Returns the smallest of zero or more numbers.
console.log(Math.min(10, 20, 30)); // Output: 10

// 12. Math.sin(x), Math.cos(x), Math.tan(x): Returns the sine, cosine, and tangent of an angle x (given in radians), respectively.
console.log(Math.sin(Math.PI / 2)); // Output: 1 (sine of 90 degrees)

// notes:
// there are 2 things associated with Number object 1 is methods which have () at the end and the 2nd is property which does not have ()
// there are lot more properties and methods in math object other than above mentioned