const name = 'Rishabh'
const repoCount = 4

console.log(name + ' has ' + repoCount + ' repos');  // this is a outdated way and also very confusing so try to avoid this.
// another way is: string interpolated --> ` ${} `
console.log(`Hi! this is ${name} & I have ${repoCount} repos`)  // this is a modern way and it increses the readability also.

// ways of declaring strings
const Name = "Rishabh Tyagi"  // variable names are case senstive 'name' and 'Name' both are diff. variables
const myName = new String("Rishabh Tyagi")  // this way uses Object of JS | but behind the scenes both ways uses same technique in background

// note:
const yourName = new String("Tyagi Rishabh")
// things to remember here is -->  In JavaScript, When you use typeof with the primitive data type "string", it returns "string." However, when you use typeof with the constructor function String (note the capital 'S'), it returns "function."

// In the second case, String refers to the constructor function for strings in JavaScript. When you use typeof with a constructor function, it returns "function" because functions are objects in JavaScript, and String is a function (a constructor function for creating string objects).

// String function contains lots of methods and mastering these methods is actually the study of Strings in js.

// The String constructor in JavaScript comes with several methods that you can use to manipulate and work with strings. Here are some examples of methods available on the String constructor:

// the methods which we are discussing below -- These methods are part of the prototype chain for String objects and are available for any instance of a string. They allow you to perform common string manipulations and operations in a convenient way. It's worth noting that strings in JavaScript are immutable, meaning these methods return new strings rather than modifying the existing ones, and another valid reason is that strings are the primitive data type so copy of variable is modified not the original one. 

// 1. charAt(index): Returns the character at the specified index.
const str1 = "Hello, World!";
console.log(str1.charAt(0)); // Output: "H"

// 2. charCodeAt(index): Returns the Unicode value of the character at the specified index.
const str2 = "Hello, World!";
console.log(str2.charCodeAt(0)); // Output: 72

// 3. concat(str1, str2, ...): Concatenates one or more strings with the original string.
const str3 = "Hello, ";
const str3a = "World!";
console.log(str3.concat(str3a)); // Output: "Hello, World!"

// 4. indexOf(searchString, position): Returns the index of the first occurrence of a specified substring.
const str4 = "Hello, World!";
console.log(str4.indexOf("World")); // Output: 7

// 5. slice(start, end): Extracts a section of a string and returns a new string. [we can also give negative index to start from end]
const str5 = "Hello, World!";
console.log(str5.slice(0, 5)); // Output: "Hello"

// 6. toUpperCase(): Converts the string to uppercase.
const str6 = "Hello, World!";
console.log(str6.toUpperCase()); // Output: "HELLO, WORLD!"

// 7. toLowerCase(): Converts the string to lowercase.
const str7 = "Hello, World!";
console.log(str7.toLowerCase()); // Output: "hello, world!"

// 8. finding the length of string using .length property
const str8 = "Hello, World!";
console.log(str8.length); // Output: "13"

// 9. getting the substring [we can not give negative value in index unlike slice method]
const str9 = "Hello, World!";
console.log(str9.substring(0,4)); // Output: "hell"

// 10. trim method -- removes all the extra spaces [go to the MDN docs to know more about trim()]
const str10 = "    Hello, World!    ";
console.log(str10); // Output: "    Hello, World!    "
console.log(str10.trim());// Output: "Hello, World!"

// 11. replace method -- it finds the value and replace with another value
const url = "https://rishabh.com/rishabh%20tyagi";
console.log(url.replace('%20', '-')); // Output: "https://rishabh.com/rishabh-tyagi"

// 12. includes method -- used to find the occurance of substring in a string
const str12 = "hi this is rishabh tyagi from dehradun";
console.log(str12.includes("rishabh")); // Output: "true"

// 13. split method -- used to fragment the string based on particular seperator and limit | note: this method splits string based on seperator and returns an array of seperated strings
const str13 = "rishabh-tyagi-dehradun";
console.log(str13.split('-')); // Output: "[ 'rishabh', 'tyagi', 'dehradun' ]"

// notes: make a article covering all the string methods to learn more in detail
// strings are the very powerful in any language so learn in depth about strings
// there are 2 things associated with String object 1 is methods which have () at the end and the other is properties which does not have ()