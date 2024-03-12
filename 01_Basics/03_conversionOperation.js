// conversion into numbers starts here -------------------------------------

let score = "33";
let score2 = "33abc";
let boolScore = true;
let varCheck = NaN;
let varCheck2 = undefined;
let varCheck3 = null;

let conScore = Number(score);
console.log(typeof score);
console.log(typeof conScore);
console.log(conScore);
console.log();

let conScore2 = Number(score2);
console.log(typeof score2);
console.log(typeof conScore2);
console.log(conScore2);
console.log();

let conboolScore = Number(boolScore);
console.log(typeof boolScore);
console.log(typeof conboolScore);
console.log(conboolScore);
console.log();

let convarCheck = Number(varCheck);
console.log(typeof varCheck);
console.log(typeof convarCheck);
console.log(convarCheck);
console.log();

let convarCheck2 = Number(varCheck2);
console.log(typeof varCheck2);
console.log(typeof convarCheck2);
console.log(convarCheck2);
console.log();

let convarCheck3 = Number(varCheck3);
console.log(typeof varCheck3);
console.log(typeof convarCheck3);
console.log(convarCheck3);
console.log();

// conversion into numbers ends here ------------------------------------

// conversion into boolean starts here ----------------------------------
let isLoggedIn = 1;
// let isLoggedIn = 0;
// let isLoggedIn = "rishabh";
// let isLoggedIn = ""; // empty string
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);
console.log();

// output of all the conditions(all the commented conditions above) if we convert them to boolean
// 1 => true; 0 => false
// "rishabh" => true
// " " => false
// conversion into boolean ends here -------------------------------------

// conversion into string starts here ------------------------------------
let someNumber = 33;
let stringNumber = String(someNumber);
console.log(typeof stringNumber);
console.log(stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

// js is not strict so please do not rely on numbers