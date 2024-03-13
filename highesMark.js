function findHighestMark(marks) {
    let highestMark = marks[0];

    for (let i = 1; i < marks.length; i++) {
        highestMark = (marks[i] > highestMark) ? marks[i] : highestMark;
    }

    return highestMark;
}

// Test the function
const marks = [78, 92, 85, 88, 90];
const highestMark = findHighestMark(marks);
console.log("Highest mark scored:", highestMark);
