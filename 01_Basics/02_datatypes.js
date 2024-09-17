"use strict" // this will treat all JS code as newer version of JS, and even if we don't write it than also the code will be treated as the newer version of js by default nowadays.

// alert("Welcome") // we are using node Js, not the browser that's why we can't use alert this way. although there is a way to use alert in node or vs code, will discuss later 

// console.log( 3 + 3 ); console.log("rishabh") // this is not a right way to write the JS code; please maintain readablility of the code 
// if we remove the semi-colon from 1st console.log statement then it will give us error
// so better to write it in a proper way like:
// console.log( 3 + 3 )
// console.log("rishabh")
// tc39.es --> is a website where all the original documents of ecma script are available
// but generally this is only for understanding browser functionality and browser developers
// instead of this we can use mdn

let name = "rishabh" // string
let age = 22 // number
let isLoggedIn = false // boolean

// PRIMITIVE TYPES:
// number => range = 2 to power 53 (approx-not sure)
// bigint => used to store large numbers like in trading, but not used frequently
// string => use always double "" (not mandatory we can even use '' also)
// boolean => true/false
// null => it a datatype as well as a standalone value or say type (null means absence of value)
   // null is a representation of empty value but remember if we say is this a empty value suppose this => let name = "" so here these empty quotes does't specify the empty value, its a string type, not a null type
   // example of null - we requested temperature from server and server returened 0 because of some issue then it is not a good idea to send 0 back because 0 is also a temperature. so in this case null will be sent back to show that there is some error that's why the null value is sent back
// undefined => where value is not defined or say the value is not assigned till now
// symbol => it is used to find uniqueness or say used to differeciate the components 


// OBJECTS => will discuss in later videos
// null is of object type

// typeof in js:
console.log(typeof age)
console.log(typeof null)  // will return object - this is a historical quirk (strange) in js
console.log(typeof undefined) // will return undefined as a type


// notes:
// in js we can use semicolon or may not but in most of the cases we try to avoid semicolon but at the same time it is a good practice to use semicolon to increase the readibility of the code
// original documentation of js is available at - tc39.es
// also we can use mdn documentaion because it is very clear and precise to read and understand

// undefined - Declaration without Initialization: When a variable is declared without being assigned a value, it is automatically assigned the value undefined.

// Function without Return Statement: If a function does not explicitly return a value, it returns undefined.

// Function Returning Null: If a function returns the value null, the result of the function will be null.

// Typeof Checks: The typeof operator can be used to check the type of a variable. Note that typeof null returns 'object', which can be misleading. This is a historical quirk in JavaScript.

// very imp note:
// Undefined: It means a variable has been declared but hasn't been assigned a value. It's the default value of uninitialized variables.

// Null: It represents the intentional absence of any object value. It is a value that has been explicitly set to indicate no value or no object.
// So, undefined typically shows up when JavaScript expects a value but hasn't found one, whereas null is often set by developers to explicitly indicate that a variable or object has no assigned value.