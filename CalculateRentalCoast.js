function calculateRentalCost(daysRented, carType) {
    let rentalCost;

    switch (carType.toLowerCase()) {
        case "economy":
            rentalCost = 4000;
            break;
        case "midsize":
            rentalCost = 15000;
            break;
        case "luxury":
            rentalCost = 20000;
            break;
        default:
            console.log("Invalid car type");
            return;
    }

    const totalCost = rentalCost * daysRented;
    return totalCost;
}

// Example usage
const daysRented = 5;
const carType = "midsize";
const totalCost = calculateRentalCost(daysRented, carType);
console.log(`Total rental cost for ${daysRented} days of ${carType} car: Rs. ${totalCost}/-`);
