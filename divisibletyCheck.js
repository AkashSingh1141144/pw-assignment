function printDivisibleByThreeNotByTwo(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (number % 3 === 0 && number % 2 !== 0) {
            console.log(number);
        } else {
            continue;
        }
    }
}

// Example usage
const numbers = [3, 6, 9, 12, 15, 18, 21, 24];
printDivisibleByThreeNotByTwo(numbers);
