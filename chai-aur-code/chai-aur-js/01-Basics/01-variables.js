// "use strict";

const accountId = 1 //Used to declare constants/constant variables
let accountEmail = "mail@email.com" // Used to declare variables that be reassigned
var accountPass = "pass1" // Recommended not to use, because of scoping issues
accountCity = "Delhi" // Don't assign undeclared variables
let accountState; // Uninitialized variables are assigned as undefined

// accountId = 2 // Reassignment of constant isn't allowed
accountEmail = "email@mail.com"
accountPass = "password1"
accountCity = "Mumbai"

// console.log(accountId);
console.table([accountId, accountEmail, accountPass, accountCity, accountState])
