/**
 * #########
 * JUMP GAME
 * #########
 * Given is an array with positive integers. Each value represents the numbers
 * of steps you can jump forward. Write a function that determines wether you
 * can reach the last position in the array.
 * 
 * Example
 * [1,2,3,4]    -> true because at arr[0] can get you to arr[1], at arr[1] you
 *              can jump two steps to arrive at arr[3] 
 * [3,2,1,0,4]  -> false because once you end up at arr[3] you can go no 
 *              further
 * 
 * LOGIC
 * - traverse the arr starting at i = 0 and nextIndex = i + arr[i]
 * - if you get to n - 1 return true
 * - if any other position is 0, return false
 * - if nextIndex > n - 1 return false 
 */
function canJumptoEndSimple(arr){
    let n = arr.length;
    let i = 0;
    while(i < n){
        if(i === n - 1) return true;
        if(arr[i] === 0) return false;
        let nextIndex = i + arr[i];
        //console.log(i, arr[i], nextIndex)
        if(nextIndex > n - 1) return false;
        i = nextIndex;
    }
}
/**
 * The above is simplified version of the jump game whereby each value 
 * represents the exact number of steps you can jump. But what if that value is
 * the maximum of steps you can take? Thus if arr[0] = 2 you can take 1 step
 * or 2 steps.
 * 
 * [2,3,1,4]
 *      -> i = 0 -> take 1 step:  arr[1]
 *                  -> take 1 step:  arr[2] 
 *                          -> take 1 step: arr[3] -> return true
 *                  -> take 2 step:  arr[3] -> return true  
 *                  -> take 3 step:  arr[4] = undefined
 *      -> i = 0 -> take 2 steps: arr[2]
 *                  -> take 1 step: arr[3] -> return true
 * In this case there are three paths to n - 1.
 * 
 */
function canJumptoEndRecursively(arr, i = 0){
    let n = arr.length;
    let steps = arr[i];
    //console.log(i, steps)
    if(i === n - 1) return true;
    if(steps === 0) return false;
    while(steps > 0){
        let nextIndex = i + steps;
        if(canJumptoEndRecursively(arr, nextIndex)){
            return true;
        } else steps--
    }
    return false
}       
module.exports = {
    canJumptoEndSimple,
    canJumptoEndRecursively
}