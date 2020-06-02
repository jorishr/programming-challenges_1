/**
 * KNAPSACK PROBLEM
 * Given is a knapsack with a weight capacity of C = 10 kg. Fill the sack 
 * with a selection of the following items such that you can carry the most
 * value in the sack.
 * -------------------------
 * weight| 1   2   4   2   5
 * value | 5   3   5   3   2
 * -------------------------
 * 
 * Store both weight values and value values in an array. 
 * If you have n items, start at n and use recursion to move down the list:
 * pick(n)      -> true /false
 * pick(n - 1)  -> true /false
 * pick(n - 2)  -> true /false
 * pick(n - 3)  -> true /false
 * pick(n - 4)  -> true /false
 * 
 * The base case is: if(n === 0 || c === 0)
 * 
 * If weight of item exceeds capacity, move to next item n-1
 * else calculate the value for two recursive paths:
 * - a path for which you add the value to the sack
 * - a path for which you don't add the value the sack
 * compare the result and pick the max value
 * 
 * Note use n-1 for the array positions, to match the zero based index
 */
(function(){
    let result;
    const w = [1, 2, 4, 2, 5];
    const v = [5, 3, 5, 3, 2];
    function fillSack(n, c){
        if(n === 0 || c === 0) return result = 0;
        else if(w[n - 1] > c){
            return result = fillSack(n - 1, c);
        } 
        else {
            // v[4] = 2 + fill(4, 10 - 5)
            // fill(4, 10)
            let tmp1 = v[n - 1] + fillSack(n - 1, c - w[n - 1]);
            let tmp2 = fillSack(n - 1, c);
            result = Math.max(tmp1, tmp2);
        }
        return result;
    }
    console.log(fillSack(5, 10));   // -> 16
    console.log(fillSack(5, 15));   // -> 18
})();
/**
 * The problem with code above is that the recursion tree can grow very big 
 * because for every item we check both recursive paths resulting in an 
 * exponential time complexity of 2^n or O(2^n).
 * 
 * To make this approach more efficient we can store the intermediate results
 * in a two-dimensional array or matrix since there are always n * c possible
 * combinations.
 * 
 * The time complexity reduce to n*c or O(nc) because that is is the maximum
 * amount of possible combination between n and c and if a recursive path 
 * requires a calculation that is done before, it can be picked from the 
 * matrix in constant time. 
 */
(function(){
    let result;
    const w = [1, 2, 4, 2, 5];
    const v = [5, 3, 5, 3, 2];
    let n = 5;
    let c = 10;
    //initialize a 2D results matrix to store intermediate results
    let matrix = [];
    for(let i = 0; i <= n; i++){
        matrix[i] = []
        for(let j = 0; j <= c; j++){
            matrix[i][j] = undefined;
        }
    }
    function fillSack(n, c){
        if(n === 0 || c === 0) return result = 0;
        if(matrix[n][c] !== undefined) return matrix[n][c];
        else if(w[n - 1] > c){
            result = fillSack(n - 1, c);
        } 
        else {
            // v[4] = 2 + fill(4, 10 - 5)
            // fill(4, 10)
            let tmp1 = v[n - 1] + fillSack(n - 1, c - w[n - 1]);
            let tmp2 = fillSack(n - 1, c);
            result = Math.max(tmp1, tmp2);
            matrix[n][c] = result
        }
        return result;
    }
    console.log(fillSack(5, 10));   // -> 16
    console.log(fillSack(5, 15));   // -> 18
})();