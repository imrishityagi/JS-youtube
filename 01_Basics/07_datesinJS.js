// In JavaScript, dates represent specific points in time. The Date object is used to work with dates and times in JavaScript. It allows you to create date objects, manipulate them, and extract various components such as the year, month, day, hour, minute, second, and millisecond.

// first thing to remember about dates is that dates in js is quite complex topic
// dates is a pain point of js because it gives unexpected output (unexpected output comes because we have to write code related to date very carefully | we have different formats, differenet timezones so write code very carefully, there are lot of complications in dates in js). one thing work for us but may be not for some other person - so remember this.

// Dates in JavaScript are used to work with dates and times in your code. You can create new dates, manipulate them, and display them to users.

// Creating Dates: You can create a new date object using the new Date() constructor. If you don't provide any parameters, it gives you the current date and time.
// Here's a simple example of creating and manipulating dates in JavaScript:

// Create a new Date object
let currentDate = new Date();
console.log(typeof currentDate);

// Get individual components || Getter methods in JavaScript's Date object allow you to retrieve specific components of a date such as the year, month, day, hour, minute, second, and millisecond. These methods help you extract information from a date object. Here are the commonly used getter methods:
let year = currentDate.getFullYear();
let month = currentDate.getMonth();
let day = currentDate.getDate();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();
let milliseconds = currentDate.getMilliseconds();

// Display current date and time
console.log(`Current Date: ${year}-${month + 1}-${day}`);
console.log(`Current Time: ${hours}:${minutes}:${seconds}`);

// Set a new year
currentDate.setFullYear(2025);
console.log(`New Year: ${currentDate.getFullYear()}`);

// Perform arithmetic operations
let futureDate = new Date();
futureDate.setDate(currentDate.getDate() + 30);
console.log(`Date after 30 days: ${futureDate}`);

// In JavaScript, the Date object provides setter methods that allow you to set specific components of a date object such as the year, month, day, hour, minute, second, and millisecond. These setter methods adjust the respective components of the date object while keeping other components unchanged. For example:
let currentDate2 = new Date(); // Current date and time
currentDate2.setFullYear(2025);
currentDate2.setMonth(5);
currentDate2.setDate(15);
currentDate2.setHours(12);
currentDate2.setMinutes(30);
currentDate2.setSeconds(45);
currentDate2.setMilliseconds(500);


// Very Very important topic: more details are at last
// Formatting Dates: JavaScript itself doesn't provide built-in methods for formatting dates for display, but you can achieve this using string manipulation or third-party libraries like Moment.js or date-fns.
console.log(myDate);                     // o/p: 2024-03-17T03:37:59.585Z
console.log(myDate.toString());          // o/p: Sun Mar 17 2024 09:07:59 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());      // o/p: Sun Mar 17 2024
console.log(myDate.toTimeString());      // o/p: 09:07:59 GMT+0530 (India Standard Time)
console.log(myDate.toISOString());       // o/p: 2024-03-17T03:37:59.585Z
console.log(myDate.toJSON());            // o/p: 2024-03-17T03:37:59.585Z
console.log(myDate.toLocaleString());    // o/p: 17/3/2024, 9:07:59 am
console.log(myDate.toLocaleDateString());// o/p: 17/3/2024
console.log(myDate.toLocaleTimeString());// o/p: 9:07:59 am

// notes: By default, JavaScript's Date object uses the local timezone of the user's browser or environment. This means that dates can appear differently depending on where the user is. Be cautious when dealing with timezones to ensure consistent behavior across users.

// months starts from 0 in js
// there are some variable messup in this code so please look deeply into the code

// ----------------------------------------------------------------------------------------------------//

// Formatting dates is crucial for displaying dates in a user-friendly manner. While JavaScript doesn't have built-in formatting methods for dates, you can achieve formatting through various approaches:

// 1. Manual Formatting: You can manually format dates using the getter methods (getFullYear(), getMonth(), getDate(), etc.) and string concatenation or template literals. This approach gives you full control over the formatting but can be verbose and error-prone.
let currentDate3 = new Date();
let formattedDate0 = currentDate3.getFullYear() + '-' + (currentDate3.getMonth() + 1) + '-' + currentDate3.getDate();

// 2. String Formatting Libraries: There are several third-party libraries like Moment.js, date-fns, and Luxon that provide robust date formatting utilities. These libraries offer various formatting options and handle edge cases like time zones and internationalization.
// Using Moment.js:
let formattedDate1 = moment(currentDate).format('YYYY-MM-DD');
// Using date-fns:
let formattedDate2 = format(currentDate, 'yyyy-MM-dd');
// Using Luxon:
let formattedDate3 = DateTime.fromJSDate(currentDate).toFormat('yyyy-MM-dd');

// 3. Intl.DateTimeFormat: Modern browsers support the Intl.DateTimeFormat object, which provides localized date and time formatting based on the user's locale. This approach is more lightweight than using third-party libraries and is suitable for basic formatting needs.
let formattedDate = new Intl.DateTimeFormat('en-US').format(currentDate);

// note: Each of these methods has its advantages and use cases. Using a dedicated library like Moment.js or date-fns is recommended for complex formatting requirements or when you need broader compatibility. However, for simpler cases or to minimize dependencies, manual formatting or the Intl.DateTimeFormat object can suffice. Choose the method that best fits your project's needs and constraints.