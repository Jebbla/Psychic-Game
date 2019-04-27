var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

console.log(letters[4]);
console.log(letters.length);

var letter = letters[10]
console.log(letter)

// letters[25] = "hi"
// console.log(letters)

//code runner extension - ctrl + alt + n


// console.log("2" + "2"); // "22" concatenation


// array manipulation functions

// push - pushes a value to the end of the array

// letters.push("hello");

// same as:
// letters[letters.length] =- "hello"

// splice mutates the array (changeing it)
// var splicedLetters = letters.splice(2, 10, "inserted element")
// console.log(splicedLetters)


// slice does not mutate

// console.log(letters)

var someLetters = letters.slice(3, 5)
console.log(someLetters);
// console.log(letters)


var foundIndex = letters.indexOf("a", 2)
console.log('found index', foundIndex)

