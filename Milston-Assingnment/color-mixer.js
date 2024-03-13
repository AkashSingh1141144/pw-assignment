function mixColors(color1, color2) {
    let result;

    switch (color1) {
        case "red":
            switch (color2) {
                case "blue":
                    result = "purple";
                    break;
                case "yellow":
                    result = "orange";
                    break;
                default:
                    result = "Invalid color combination";
                    break;
            }
            break;
        case "blue":
            switch (color2) {
                case "red":
                    result = "purple";
                    break;
                case "yellow":
                    result = "green";
                    break;
                default:
                    result = "Invalid color combination";
                    break;
            }
            break;
        case "yellow":
            switch (color2) {
                case "red":
                    result = "orange";
                    break;
                case "blue":
                    result = "green";
                    break;
                default:
                    result = "Invalid color combination";
                    break;
            }
            break;
        default:
            result = "Invalid color combination";
            break;
    }

    console.log("Resulting color:", result);
}

// Test the function
mixColors("red", "blue"); // purple
mixColors("blue", "red"); // purple
mixColors("red", "yellow"); // orange
mixColors("yellow", "red"); // orange
mixColors("blue", "yellow"); // green
mixColors("yellow", "blue"); // green
mixColors("green", "yellow"); // Invalid color combination
