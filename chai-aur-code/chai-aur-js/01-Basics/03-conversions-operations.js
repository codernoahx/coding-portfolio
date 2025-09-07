/* --- Conversions --- */

/* Number Conversions */

// let value = Number(33) // => number, 33
// let value = Number(24.354) // => number, 24.354
// let value = Number("33") // => number, 33
// let value = Number(-23) // => number, -23
// let value = Number(-23.345) // => number, -23.345
// let value = Number(null) // =>  number, 0
// let value = Number(undefined) // =>  number, NaN (Not-A-Number)
// let value = Number("noah") // =>  number, NaN
// let value = Number("noah123") // => number, NaN
// let value = Number(true) // => number, 1
// let value = Number(false) // => number, 0
// let value = Number("") // => number, 0
// let value = Number([]) // => number, 0
// let value = Number({}) // => number, NaN
// let value = Number() // => number, 0
// let value = Number(NaN) // => number, NaN

/* Boolean Conversions */

// let value = Boolean(1) // => boolean, true
// let value = Boolean(0) // => boolean, false
// let value = Boolean(-23) // => boolean, true
// let value = Boolean(23.45) // => boolean, true
// let value = Boolean("") // => boolean, false
// let value = Boolean("noah") // => boolean, true
// let value = Boolean("noah123") // => boolean, true
// let value = Boolean([]) // => boolean, true
// let value = Boolean({}) // => boolean, true
// let value = Boolean(null) // => boolean, false
// let value = Boolean(undefined) // => boolean, false
// let value = Boolean() // => boolean, false
// let value = Boolean(NaN) // => boolean, false

/* String Conversions */

// let value = String("") // => string, (empty/blank)
// let value = String() // => string, (empty/blank)
// let value = String("noah") // => string, noah
// let value = String("noah123") // => string, noah123
// let value = String(12) // => string, 12
// let value = String(23.45) // => string, 23.45
// let value = String(-23) // => string, -23
// let value = String(true) // => string, true
// let value = String(false) // => string, false
// let value = String([]) // => string, (empty/blank)
// let value = String({}) // => string, [object Object]
// let value = String(null) // => string, null
// let value = String(undefined) // => string, undefined
// let value = String(NaN) // => string, NaN

// console.log(typeof(value)); // typeof can be used with parantheses as well
// console.log(typeof value);
// console.log(value);

/* --- Operations --- */

// let value = 3
// let negValue = -value
// console.log(negValue)

// console.table([2+2, 2-2, 2*2, 2**3, 3/2, 3%2]);

// let chunk1 = "hello "
// let chunk2 = "world"
// let chunk3 = chunk1 + chunk2
// console.log(chunk3);

// console.table([
//   "1" + 2,
//   1 + "2",
//   "1" + 2 + 2,
//   1 + 2 + "3",
//   "1" + 4 / 2,
//   6 / 2 + "3",
//   "3" + 3 ** 2,
//   3 ** 3 + "2",
//   4 ** 2 + (((4.5 / 3.56) * 4) % 3) - 3,
// ]);

// console.log(+ true); // => 1
// console.log(true +); // => SyntaxError
// console.log(+ ""); // => 0

// let num1 = num2 = num3 = 4
// num2 = 5
// console.log(num1, num2, num3);

// let counter = 5;
// counter++;
// console.log(counter);
// counter--;
// console.log(counter);

// const postCounter = counter++
// const preCounter = ++counter
// console.log(postCounter, preCounter, counter);