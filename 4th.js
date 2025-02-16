function findAveragePhonePrice(phones) {
    let sumOFPrice = 0;
    for (const phone of phones) {
        sumOFPrice = sumOFPrice + phone.price;
    }
    console.log(phones.length);
    const avg = sumOFPrice / phones.length;
    return avg;
}

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];
const result = findAveragePhonePrice(phones);
console.log("average price of phone:", result);
