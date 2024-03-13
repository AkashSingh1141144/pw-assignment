function correctQuantityBug(cart) {
    // Iterate through each item in the cart array
    for (let i = 0; i < cart.length; i++) {
        // Double the quantity of each item
        cart[i] *= 2;
    }
    // Return the corrected cart array
    return cart;
}

// Example usage
const cart = [1, 2, 3, 4, 5];
const correctedCart = correctQuantityBug(cart);
console.log("Corrected Cart:", correctedCart);
