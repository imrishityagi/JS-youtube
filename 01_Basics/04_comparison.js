console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);
// these are the examples of same data type comparison

// but problem occurs when we compare different data types like these below:
console.log("2" > 1);  // here "2" will automatically get converted into number
console.log("02" > 1); // same here also
// notes: sometimes comparison does not gives us predicted results, so ensure that the data type must be same of both the what so ever number, strings etc
// typescript does not allow comparison of diff. data types because typescript is a strictly typed language

console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true
// IMP NOTE: in (null > 0) gives us false, whereas (null >= 0) gives us true why? the reason is that an equality checker == and comparisons < > >= <= works differently.    comparisons converts null to a number, treating it as a 0.   that's why (null >= 0) gives us true and (null > 0) gives us false.

console.log(undefined == 0); // false
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false
console.log(undefined >= 0); // false
console.log(undefined <= 0); // false

// strict check -->   ===    checks value as well as data type

console.log("2" === 2); // compares the value as well as data type

// so remember that comparisons and equality checker both works differently in js