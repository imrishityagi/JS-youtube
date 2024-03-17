const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "batman", "flash"]

//marvel_heroes.push(dc_heroes);
console.log(marvel_heroes);    // o/p: [ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]
// note: - arrays takes up any data when we add something new to arrays, it means that it can take array, object, string, number whatever we want to add (any data type available in js whether it is primitive or non-primitive || in above case it took the array(dc_heroes) itself as a individual element


// The concat() method in JavaScript is used to merge two or more arrays or values together, creating a new array without modifying the original arrays. It returns a new array that contains the elements of the original arrays, concatenated in the order they were provided.
const all_heroes = marvel_heroes.concat(dc_heroes);
console.log(all_heroes);

// The spread operator (...) in JavaScript is a powerful feature introduced in ECMAScript 6 (ES6) that allows an iterable (such as an array) to be expanded into individual elements. It provides a concise and flexible syntax for various tasks, including creating copies of arrays, combining arrays, passing multiple arguments to functions, and more.
const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes);
// spread operator does the same tast as concat but the diff is it is more preffered because we can pass as much as arrays we want to combine or say merge.

// The flat() method in JavaScript is used to flatten an array by removing nested arrays (also known as sub-arrays) and concatenating their elements into a new array. It operates recursively to flatten all nested arrays to the specified depth.

// Syntax: let newArray = array.flat([depth]);

// depth (optional): The depth level specifying how deep the nested arrays should be flattened. The default is 1.
// The flat() method returns a new array with all the elements of the original array flattened to the specified depth.
// If no depth is provided, the default depth is 1, meaning it flattens one level of nested arrays.
// If a negative depth is provided, the method flattens all nested arrays recursively to an infinite depth.
// Elements that are not arrays are preserved as they are.
// It does not modify the original array; it returns a new flattened array.

const myArray = [1, 2, 3, [4, 5], 6, [7, 8, [9]]]
const another_array = myArray.flat(Infinity);     // Infinity removes all the levels of nest in an array
console.log(another_array);

// The Array.from() method in JavaScript is a static method that creates a new, shallow-copied array instance from an array-like or iterable object. It allows you to convert array-like objects (such as NodeList, arguments, strings, etc.) and iterable objects (such as Set, Map, etc.) into actual arrays.
console.log(Array.isArray("Rishabh"));
const nameArray = Array.from("Rishabh"); // from converts anything into an array
console.log(nameArray);

const myObj = {name: "Rishabh", age: 21, city: "doon"};
console.log(Array.from(myObj)); // o/p: '[]'  || interesting case -- (here from method is not understanding what to do)
// here is solution for these types of cases
console.log(Array.from(Object.keys(myObj)));
console.log(Array.from(Object.values(myObj)));
console.log(Array.from(Object.entries(myObj)));

// he of syntax in JavaScript is used to create a new Array instance with a variable number of arguments, similar to array literals. It's a concise way to create an array from a list of values without explicitly specifying the length or using array methods like push().
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));




// notes: push works on existing array means it can not create new array it modifies the existing array
//        concat returns the new array having all the elements of both the arrays