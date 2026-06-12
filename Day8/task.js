const n = 5;
const totalRows = 2 * n - 1;

for (let i = 1; i <= totalRows; i++) {
    // Determine the current row behavior (1 to 5, then back down to 1)
    let elementsInRow = i <= n ? i : totalRows - i + 1;

    let leftWing = "";
    let rightWing = "";

    // 1. Build the Left Wing
    for (let j = 1; j <= elementsInRow; j++) {
        if (j % 2 !== 0) {
            leftWing += elementsInRow + " ";
        } else {
            leftWing += (10 - elementsInRow) + " ";
        }
    }

    // 2. Build the Right Wing (Mirror of the Left)
    for (let j = elementsInRow; j >= 1; j--) {
        if (j % 2 !== 0) {
            rightWing += elementsInRow + " ";
        } else {
            rightWing += (10 - elementsInRow) + " ";
        }
    }

    // 3. Calculate Spaces between wings
    let spaceCount = (2 * n) - (2 * elementsInRow);
    let middleSpaces = "  ".repeat(spaceCount);

    // Print the complete row
    console.log(leftWing + middleSpaces + rightWing);
}