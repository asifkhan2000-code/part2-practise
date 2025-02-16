function smallestName(names) {
    let smallestName = names[0];
    for (const name of names) {
        if (name.length < smallestName.length) {
            smallestName = name;
        }
    }
    return smallestName;
}
const heights2 = ["rahim", "robin", "rafi", "ron", "rashed"];
const result = smallestName(heights2);
console.log("Smallest name is:", result);
