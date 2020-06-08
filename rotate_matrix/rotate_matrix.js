/**
 * #############
 * ROTATE MATRIX
 * #############
 * Rotate a 2D matrix of n * n element 90 degrees clockwise. 
 * Rotate in place, don't use another matrix to stored data.
 * 
 * Example
 * const matrix = [
 *      [1, 2, 3],
 *      [4, 5, 6],
 *      [7, 8, 9]
 * ]
 * should become:
 * const rotatedMatrix = [
 *      [7, 4, 1],
 *      [8, 5, 2],
 *      [9, 6, 3]
 * ]
 * LOGIC
 * Divide the matrix in circles or squares: 
 * square one: top row, last column, bottom row, first column
 * square two: top row - 1, last column - 1, bottom row + 1, first column + 1
 * ...
 * There are square n / 2 square because each square includes 2 sides. Loop 
 * over the squares. 
 * 
 * Swap corner elements in clockwise direction. Then swap corner + 1 elements,
 * etc.
 * 
 * Example:
 * first square, first round of swaps:
 * [ 7, 2, 1 ]
 * [ 4, 5, 6 ] 
 * [ 9, 8, 3 ]
 * first square, second round of swaps:
 * [ 7, 4, 1 ]
 * [ 8, 5, 2 ] 
 * [ 9, 6, 3 ]
 * IF there are more row and colums, continues with square two which is inside
 * square one.
 */

function rotatedMatrix(arr){
    const n = arr.length;
    //loop over rows
    //swap top right to bottom left
    for(let i = 0; i < n / 2; i++){
        for(let j = i; j < n - 1 - i; j++){
            //store current el
            const tmp = arr[i][j];
            //set top left to bottom left
            arr[i][j] = arr[n - 1 - j][i];
            //set bottom left to bottom right
            arr[n - 1 - j][i] = arr[n - 1 - i][n - 1 - j];
            //swap bottom left to top right
            arr[n - 1 - i][n - 1 - j] = arr[j][n - 1 - i];
            //swap top right to top left
            arr[j][n - 1 - i] = tmp;
        }
    }
    return arr;
}
module.exports = rotatedMatrix;