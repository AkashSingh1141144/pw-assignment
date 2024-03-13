// Define a customer object with name and balance properties
const customer = {
    name: "John Doe",
    balance: 1000
};

// Function to deposit money into the customer's account
const deposit = (amount) => {
    customer.balance += amount;
    console.log(`Deposit of Rs. ${amount} successful. Updated balance: Rs. ${customer.balance}`);
};

// Function to withdraw money from the customer's account
const withdraw = (amount) => {
    if (amount <= customer.balance) {
        customer.balance -= amount;
        console.log(`Withdrawal of Rs. ${amount} successful. Updated balance: Rs. ${customer.balance}`);
    } else {
        console.log("Insufficient funds. Withdrawal unsuccessful.");
    }
};

// Example usage
console.log("Initial balance:", customer.balance);
deposit(500);
withdraw(200);
withdraw(1500);
