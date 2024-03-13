function capitalizeFirstLetter(name) {
    return (name.charAt(0) === name.charAt(0).toLowerCase()) ? name.charAt(0).toUpperCase() + name.slice(1) : name;
}

// Test the function
const userName1 = "john";
const userName2 = "Alice";

console.log(capitalizeFirstLetter(userName1)); // John
console.log(capitalizeFirstLetter(userName2)); // Alice (unchanged)
