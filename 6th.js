const prompt = require("prompt-sync")();
const str = prompt("Enter sentence: ");
let words = str.split(" ");

let string = "";
for (const word of words) {
    const capitalizedWord =
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    string = string + capitalizedWord + " ";
}
console.log(string);
console.log(string.length);
// this represents how trin() method works
console.log(string.trim().length);
