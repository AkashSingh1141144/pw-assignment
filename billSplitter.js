function calculateBillPerPerson(costPerDish, numberOfPeople) {
    const totalBill = costPerDish.reduce((acc, curr) => acc + curr, 0);
    const billPerPerson = totalBill / numberOfPeople;

    return {
        totalBill: totalBill,
        billPerPerson: billPerPerson
    };
}

// Example usage
const costPerDish = [150, 200, 100]; // Cost of each dish
const numberOfPeople = 4; // Number of people sharing the bill
const billSplit = calculateBillPerPerson(costPerDish, numberOfPeople);
console.log("Total bill:", billSplit.totalBill);
console.log("Bill per person:", billSplit.billPerPerson);
