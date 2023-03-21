class App {

    solveMatrix(matrix) {
        const resultArray = [];
        var topRow = 0;
        var bottomRow = matrix.length - 1;
        var leftCol = 0;
        var rightCol = matrix[0].length - 1;     

        while (topRow <= bottomRow && leftCol <= rightCol) {
            
            // Traverse right on top row
            for (let col = leftCol; col <= rightCol; col++) {
                resultArray.push(matrix[topRow][col]);
            }
            topRow++;

            // Traverse down on right column
            for (let row = topRow; row <= bottomRow; row++) {
                resultArray.push(matrix[row][rightCol]);
            }
            rightCol--;

            // Traverse left on bottom row
            if (topRow <= bottomRow) {
                for (let col = rightCol; col >= leftCol; col--) {
                    resultArray.push(matrix[bottomRow][col]);
                }
                bottomRow--;
            }

            // Traverse up on left column
            if (leftCol <= rightCol) {
                for (let row = bottomRow; row >= topRow; row--) {
                    resultArray.push(matrix[row][leftCol]);
                }
                leftCol++;
            }
            
        }
        
    return resultArray;

    }

}


const app = new App();

const matrix = [
    [10, 11, 12],
    [17, 18, 13],
    [16, 15, 14]
];

app.solveMatrix(matrix).forEach(element => console.log(element));