function doContainsNumber(str) {
    return !!str.match(/\d/);
}
const str = "Hello123";
let result = doContainsNumber(str);
console.log(result);

// conditional concept explanation for first string(we can use both)
console.log(!!str.match(/\d/) === (str.match(/\d/) !== null));

const str2 = "Hello";
result = doContainsNumber(str2);
console.log(result);

// conditional concept explanation for second string(we can use both)
console.log(!!str2.match(/\d/) === (str2.match(/\d/) !== null));
