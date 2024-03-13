function removeDuplicates(cart) {
    return [...new Set(cart)];
}

// Example usage
const shoppingCart = ["item1", "item2", "item3", "item1", "item4", "item2"];
const uniqueCart = removeDuplicates(shoppingCart);
console.log(uniqueCart);
