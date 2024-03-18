// Objects - In JavaScript, objects are complex data types that allow you to store collections of data in key-value pairs. They are one of the fundamental building blocks of the language and are used extensively in JavaScript programming. Objects in JavaScript can represent real-world entities, such as a person or a car, or abstract concepts like a set of configuration options or a collection of data.

// there are two ways to declare objects in JS
// 1. in the form of literals
// 2. in the form of constructor

// 1. Object literal

const mySym = Symbol("key1");  // if we want to add this symbol as a key into our object then,

const jsUser = {
    name: "Rishabh",      // by default js parse the any key as a string eg: name = "name", age = "age" and so on
    "full Name": "Rishabh Tyagi",
    "dob": "15/Aug/1947",  // we can also define key as a string bec. ultimately it will get converted into string
    age: 18,
    location: "doon",
    email: "rishabh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    mySym: "myKey1",       // here our program is not reffering to mySym it is sepeate key value pair here (mySym: "myKey1")
    [mySym]: "myKey2",     // here our program is reffering to our Symbol named mySym
}
// Accessing objects
// mostly we thought that we can access objects like this:
console.log(jsUser.email);       // but this is not a appropriate way to access objects
console.log(jsUser["email"]);    // this is the another way and try to use it more
console.log(jsUser["full Name"]); // if the key is defined as a string eg:("fullName") then we have only this way to access object
// console.log(jsUser.full Name);    // o/p: error -- we can not access key's value by using . if we have declared key as a string
console.log(jsUser.mySym); // o/p: mykey1
console.log(typeof jsUser.mySym); // o/p: string || in this case the program is not reffering this towards our symbol - mySym
console.log(jsUser[mySym]);      // this is the syntax to access the Symbol key - here program is reffereing the actuall mySym
//console.log(jsUser);
// output of this symbol will be -- [Symbol(key1)]: 'myKey2' -- because here [mySym] is reffering to the Symbol("Key1")

// changing the value of key in an object
jsUser.email = "rishabh@amazon.com";
console.log(jsUser.email); // o/p: rishabh@amazon.com

// freezing the values of an object
// Object.freeze(jsUser);               // it freezes the values of an object... no changes further taken into account after this line
// note: uncomment the freeze command before moving further
// now try to change the value 
jsUser.email = "rishabh@microsoft.com";
console.log(jsUser.email); // o/p: rishabh@amazon.com    -- no changes are made

console.log(jsUser.greetings); // o/p: undefined  -- because there is nothing like greeting in jsUser object

jsUser.greetings = function() {
    console.log("hello JS user");
}
console.log(jsUser.greetings()); // o/p: undefined -- it is because we have freezed our object, so unfreeze the object first
console.log(jsUser.greetings);  // o/p: [Function (anonymous)]  -- it is because function is not executed, only the refference is returned

jsUser.greetingsTwo = function() {
    console.log(`hellow js user, ${this.name}`);
}
console.log(jsUser.greetingsTwo());


// notes: when we decalare objects in the form of literals, than singletone object is not formed whereas when we create object using constructor then singleton object is formed   || singleton - a singleton refers to a design pattern where only one instance of a particular constructor function is allowed to exist throughout the application's lifecycle.

// if we don not have space in the name of key declared as the string then we can use . operaions on that key
// generally we use . operator to access the object's elements but there are some cases where we have to use [] compulsorily like we did in case of symbol, in case of key where we have declared the key like "full Name" etc.

// we can use any data type to declare a key as well as value.
// synatx to declare and access Symbol as a key value pair in our objects
// Step 1: declare a symbol - const mySym = Symbol("Key1");
// Step 2: declare mySym as key in our object - [mySym]: "myKey1"
// Step 3: access the value of Symbol key - console.log(jsUser[mySym])