function countVowels(name) {
    const vowels = "aeiouAEIOU";
    let vowelCount = 0;

    for (let i = 0; i < name.length; i++) {
        if (vowels.includes(name[i])) {
            vowelCount++;
        }
    }

    return vowelCount;
}

// Test the function
const name = "John Doe";
console.log("Number of vowels in the name:", countVowels(name)); // Example call
