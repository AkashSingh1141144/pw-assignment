const calculateTotalCost = (cart) => {
    return cart.reduce((total, item) => total + (item.unitPrice * item.quantity), 0);
};

// Example usage
const cart = [
    { unitPrice: 10, quantity: 2 },
    { unitPrice: 15, quantity: 1 },
    { unitPrice: 20, quantity: 3 }
];

const totalCost = calculateTotalCost(cart);
console.log("Total cost of items in the cart:", totalCost);
