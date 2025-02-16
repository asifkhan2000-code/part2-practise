const prompt = require("prompt-sync")();
const str = prompt("enter sentence: ");
const string = str.toLowerCase();
const vowels = "aeiou";
let isAllVowelPresent = true;
for (const vowel of vowels) {
    if (!string.includes(vowel)) {
        isAllVowelPresent = false;
        break;
    }
}
if (isAllVowelPresent) {
    console.log("All vowels are present");
} else {
    console.log("All vowels are not present");
}

const arr = [1, 2, 3, 4, 5, 6, 2, 7, 2];
const indexes = [];
arr.forEach((num, index) => {
    if (num === 2) {
        indexes.push(index);
    }
});
console.log(indexes);
console.log((123).toString().repeat(3))

const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];

function noDuplicate(array) {
    const unique = [];
    for (const item of array) {
        if (unique.includes(item) === false) { // Simplified condition
            unique.push(item);
        }
    }
    return unique;
}

const newArray = noDuplicate(numbers);
console.log(newArray);
