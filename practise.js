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
