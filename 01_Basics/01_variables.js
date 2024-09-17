// variables means which are changable or say whose value can be changed whenever we wish to change
// constants means which are not changable once declared and whose value can not be changed if even we wish to change

// how to declare variables in javascript:
// there are two ways to declare variable in js
// 1 - constant   ----> 1 - const -- const is used to declare the constants variables in js
// 2 - variable   ----> 1 - var -- var was used in older days of js to declare variables but it has one problem which is of block scope and it is oudated way to declare variables in js
//                ----> 2 - let -- this is the alternative of var keyword in js and is the ongoing way to declare variables in js

const accountId = 799582; // this is contant variable and it's value can not be changed
let accountEmail = "rishabh@gmail.com"; // this is variable
var accountPassword = "12345"; // this is also variable
accountCity = "Mumbai"; // this is possible in javascript but don't do this at all
let accountDate; // this is also possible and it gives us undefined value in return bacause we din't provided a value to the varaible initially

// accountId = 256682 // not allowed - trying to change the value of a constant variable

accountEmail = "rt@rt.com";
accountPassword = "21212121";
accountCity = "Pune";

console.log(accountId);
console.table([     // console.table is used to console multiple item at a time and it's type is object
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountDate,
]);

// eg. of block scope problem with var defined variables
if (true) {
  var variableInBlock = "I am in a block!";
}

console.log(variableInBlock); // Output: "I am in a block!"
// in this example, despite the var declaration being inside an if block, the variable variableInBlock is accessible outside the block. This is because var does not have block scope; it is function-scoped or globally scoped.


// at the same time if we declare varible with let keyword then
if (true) {
    let blockScopedVariable = "I am block-scoped!";
  }
  
  console.log(blockScopedVariable); // Error: blockScopedVariable is not defined
//In this case, attempting to access blockScopedVariable outside the block results in an error because let is block-scoped, and the variable is not accessible outside the if block.

// imp note -> prefer not to use var because of the problem of block scope and functional scope.