// 2. Object Singleton (with the help of constructor)
// note: everything is same in both types of objects 1. literal and 2. constructor method, but the only difference is in singleton and non-singleton
// const tinderUser = new Object();  --  singleton object

const tinderUser = {};  //  non-singleton object
// now let's discuss objects more in detail

// add values to the tinderUser object
tinderUser.id = "a1234d"
tinderUser.name = "rishabh"
tinderUser.isLoggedIn = false

console.log(tinderUser);  //  { id: 'a1234d', name: 'rishabh', isLoggedIn: false }

// nested object
const regularUser = {
    email: "someone@google.com",
    fullname: {
        userFullName: {
            firstName: "Rishabh",
            lastName: "Tyagi"
        }
    }
}

// access nested object
console.log(regularUser);
console.log(regularUser.fullname);
console.log(regularUser.fullname.userFullName);
console.log(regularUser.fullname.userFullName.firstName);
// console.log(regularUser.fullname?.userFullName.firstName);  here we added ? after fullName. this concept is called optional chaining

// combining the two objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {obj1, obj2}
console.log(obj3);         // o/p: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
// this creates the same problem as we had in arrays - object inside object not merged as a single object
// another better way is:
const obj4 = Object.assign(obj1, obj2)
// const obj4 = Object.assign({}, obj1, obj2)  --  it is better to use {} in the beggining because it tells the method assign that {} is a terget and rest of the parameters are sources to be merged. otherwise both gives same results, use any one
console.log(obj4);        // o/p: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// but we mostly do not use above both methods, we use spread method here also as we used in arrays
const obj5 = {...obj1, ...obj2}
console.log(obj5);              // o/p: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// in most of the cases when data comes from databases hen comes in the form of array of objects like:
const users = [
    {
        id: "1333fg",
        name: "Rishabh"
    },
    {
        id: "2346jk",
        name: "Mohit"
    }
]

// accessing these array of objects
console.log(users[1].id);

// accessing all the keys of an object - let suppose we want all the keys of tinderUser
console.log(Object.keys(tinderUser)); // o/p: [ 'id', 'name', 'isLoggedIn' ]  --  an array of keys
// we have to specify the name of object in () of which object we want keys

// accessing all the vales of an object
console.log(Object.values(tinderUser)); // o/p: [ 'a1234d', 'rishabh', false ]  --  an array of values
console.log(Object.entries(tinderUser));// o/p: [ [ 'id', 'a1234d' ], [ 'name', 'rishabh' ], [ 'isLoggedIn', false ] ] -- an array of arrays of every key value pair

// checking if a key is present in an object
console.log(tinderUser.hasOwnProperty("isLoggedIn")); // o/p: true

// note: learn more about objects methods console window in browser