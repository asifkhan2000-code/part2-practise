function calculateElectronicsBudget(
    laptopQuantity,
    tabletQuantity,
    mobileQuantity
) {
    const perLaptop = 35000;
    const perTablet = 15000;
    const perMobile = 20000;

    const laptopTotalCost = perLaptop * laptopQuantity;
    const tabletTotalCost = perTablet * tabletQuantity;
    const MobileTotalCost = perMobile * mobileQuantity;

    const total = laptopTotalCost + tabletTotalCost + MobileTotalCost;
    return total;
}
const result = calculateElectronicsBudget(2, 3, 2);
console.log("Total cost is:", result);
