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

// --------------------------objects de-structuring------------------------------------//

// Object destructuring is a feature in JavaScript that allows you to extract multiple properties from an object and assign them to variables in a more concise and readable way. 
const course = {
    courseName: "js in hindi",
    coursePrice: "999",
    courseInstructor: "Hitesh Choudhary"
}

// so what we do generally to access the value of an object
console.log(course.courseInstructor); // this is what we do but if we wanted to acces this value at 4 or 5 places then we have to write it again and again - course.courseInstructor <--- this line

const {courseInstructor} = course
//          what           from where
// what = courseInstructor and from where = course

console.log(courseInstructor);// o/p: Hitesh Choudhary
// now we simply write courseInstructor to extract the value no need to write full line with dot operation

// also we can add a temporary name to the key while destructuring eg:
const {courseInstructor: instructor} = course
//        what           identifier    where
console.log(instructor); // o/p: Hitesh Choudhary

// ------------------------------APIs---------------------------------------------//
// jab kabhi bhi apna kaam dusro pal daal dete hai usi ko api kehte hai for eg: we have menu card in restaurant and we simply order something, we do not care how our order will be made and served everything is done by staff and chefs for example.
// so here the menu card acts like as a api documentation and the chef serves as a api. chef will make the food as per the menu/order

// api in general are the values coming from the backend. in older days values came in the form of XML but nowdays it comes in the form of JSON

{} // this is our json, JSON in reality is an object which having no name -- now let's take an example

// {
//     "name": "Rishabh",
//     "course": "js in hindi",
//     "price": "free"
// }
// this is an json -- remember one thing here program will show error if we un-comment it but there is nothing wrong in these lines of json and other thing is that the keys of json are always in string format

// sometimes we also get objects in the form of arrays, liek this:
[
    {

    },
    {
        
    }
]


// note: learn more about objects methods console window in browser
// remember whenever we see {instructor} anything like this then it means object destructuring
// object destructuring is used extensively in react and node
// similar to object destructuring we also have array destructuring - will learn later