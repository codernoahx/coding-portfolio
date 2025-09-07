// "use strict"; // Helps in avoiding the use of wrong syntax/mistakes accepted in previous JS versions.
// ; aren't mandatory, and is highly avoided when writing react and node code. And JS Interpreter/Engine automatically inserts
// ; using its Automatic Semicolon Insertion (ASI) feature.

// alert("Hey!") // alert is not defined in Node.js

// --- Primitive Data Types ---

let myName = "Noah"; // String data type represents both sequences of character including single character's, can be enclosed within single or double quotes
let age = 18.5; // Number data type represents both integers and floats
let isLoggedIn = false; // Boolean represents either true or false
// BigInt is used to represent ints larger than Number data type
let time = null; // represents the intentional absence of any object value (standalone value)
let day; // undefined indicates the absence of a value
// symbol represents a unique and immutable value

// console.table([myName, age, isLoggedIn, time, day])

// ------------------------------------------

console.log(typeof null); // => object
console.log(typeof undefined); // => undefined
// All primitive types, except null, can be tested by the typeof operator. typeof null returns "object"
