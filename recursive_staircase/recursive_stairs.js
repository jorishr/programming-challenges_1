/**
 * Given n steps. Calculate the number of ways a person can get to the top.
 * Either by taking one step at a time or two steps at a time.
 * 
 * Going from step 0 (bottom) to top step n.
 * There is a recursive relationship when you start with the base cases:
 * steps = 0    -> [0] only one way possible: 0 to 0, or 1 way
 * steps = 1    -> [0, 1] only one way possible: take one step from 0 to 1
 * steps = 2    -> [[[0, 1],[1,2]], [0, 2]] two ways possible: 
 * take one step at a time or two steps
 * 
 * steps = 3    -> can be redefined as a combination of climbing one step
 * and climbing two steps: 
 * num_ways(3) = numways(2) + numways(1) or 2 + 1 = 3 possible combinations
 * [
 *  [[0,1], [1, 2], [2,3]]  //one step only 
 *  [[0,1], [1, 3]]         //one step + two steps
 *  [0,2], [2, 3]]          //two steps + one step
 * ]
 * 
 * steps = 4 -> be redefined as follows:
 * num_ways(4) = numways(3) + numways(2) or 3 + 2 = 5 possible combinations
 * [
 *  [[0,1], [1,2], [2,3], [3,4] //one step only
 *  [[0,1], [1,3], [3,4]]       //one step + two steps + one step
 *  [[0,1], [1,2], [2,4]]       //one step + one steps + two steps
 *  [[0,2], [2,3], [3,4]]       //two steps + one steps + one steps
 *  [[0,2], [2,4]]              //two steps + two steps
 * ]
 * 
 * This pattern will continue untill num_ways(n) = num_ways(n - 1) + num_ways(n - 2)
 */
function numWays(steps){
    if(steps === 0 || steps === 1) return 1;
    else {
        return numWays(steps - 1) + numWays(steps - 2);
    }
}
console.log(numWays(4))
console.log(numWays(5))
console.log(numWays(10))
console.log(numWays(20))
//console.log(numWays(100)) -> takes too long

/**
 * This is very much like the fibonacci sequence withe the potential memory 
 * requirement problem: the recursion tree will become very big for relatively
 * small numbers and many calculations are duplicates.
 * 
 * A better approach would be to start from the bottom up.
 * 
 * We know that:
 * |steps   |ways   |
 * ------------------
 * |0       |1      |          
 * |1       |1      |          
 * |2       |2      |          
 * |3       |3      |          
 * |4       |5      |
 * 
 * Create an array of size n (steps available). We can set the first two values
 * to 1, as our base cases.
 * 
 * From there onwards (step 2) each additional step i will have numWays that is 
 * the sum of the two previous step numWays
 * num[i] = num[i - 1] + num[i - 2];
 * 
 * Use a loop to get to n or max number of steps.          
 * 
 */
function numWaysBottomUp(steps){
    if(steps === 0 || steps === 1) return 1;
    let nums = new Array(steps);
    nums[0] = 1;
    nums[1] = 1;
    for(let i = 2; i <= steps; i++){
        nums[i] = nums[i - 1] + nums[i - 2]; 
    }
    return nums[steps];
}
console.log(numWaysBottomUp(0));
console.log(numWaysBottomUp(1));
console.log(numWaysBottomUp(2));
console.log(numWaysBottomUp(3));
console.log(numWaysBottomUp(4));
console.log(numWaysBottomUp(5));
console.log(numWaysBottomUp(10));
console.log(numWaysBottomUp(20));
console.log(numWaysBottomUp(100));

/**
 * The bottum up approach is faster than the recursive approach but still 
 * requires an array of the size of n. You can avoid that memory usage by onlu
 * storing the previous two numWays while updating those values in each 
 * iteration of the loop. * 
 */
function numWaysOptimized(steps){
    if(steps === 0 || steps === 1) return 1;
    let numWays;
    let nMin1 = 1;
    let nMin2 = 1;
    for(let i = 2; i <= steps; i++){
        numWays = nMin1 + nMin2;          
        nMin1 = nMin2;                    
        nMin2 = numWays;                    
    }                                     
    return numWays;
}
console.log(numWaysOptimized(5));
console.log(numWaysOptimized(10));
console.log(numWaysOptimized(20));
console.log(numWaysOptimized(100));

/**
 * If the given steps you can take to climb the stairs are not one and two but
 * a set of x = {1, 3, 5} we cannot simply change the previous recursion to 
 * 
 * return numWays(steps - 1) + numWays(steps - 3) + numWays(steps - 5)
 * 
 * because for n < 3 or 5 the number would become negative
 * 
 * Instead use a new variable to store the total number of ways and
 * only add to the total if n - 3 or n - 5 is bigger or equal than 0 
 */
function numWaysSet(steps, arr){
    if(steps === 0) return 1;
    let total = 0;
    arr.forEach(i => {
        if(steps - i >= 0) total += numWaysSet(steps - i, arr);      
    });
    return total;
}

console.log(numWaysSet(2, [1,3,5]));
console.log(numWaysSet(3, [1,3,5]));
console.log(numWaysSet(4, [1,3,5]));
console.log(numWaysSet(5, [1,3,5]));
console.log(numWaysSet(10, [1,3,5]));
//console.log(numWaysSet(100, [1,3,5])); -> takes too long

/**
 * The more time efficient bottom up approach uses a inner and outer loop
 * instead of recursion.
 */
function numWaysBottomUpSet(steps, arr){
    if(steps === 0) return 1;
    let nums = new Array(steps);
    nums[0] = 1;
    for(let i = 1; i <= steps; i++){
        let total = 0;
        for(let j = 0; j < arr.length; j++){
            if(i - arr[j] >= 0){
                total += nums[i - arr[j]];
            }
        }
        nums[i] = total;
    }
    return nums[steps];
}

console.log(numWaysBottomUpSet(2, [1,3,5]));
console.log(numWaysBottomUpSet(3, [1,3,5]));
console.log(numWaysBottomUpSet(4, [1,3,5]));
console.log(numWaysBottomUpSet(5, [1,3,5]));
console.log(numWaysBottomUpSet(10, [1,3,5]));
console.log(numWaysBottomUpSet(100, [4,6,8]));
console.log(numWaysBottomUpSet(100, [10,12,15]));