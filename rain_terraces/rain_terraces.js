/**
 * #############
 * RAIN TERRACES
 * #############
 * Given an array of non-negative integers representing terraces in an
 * elevation map where the width of each bar is 1, compute how much water 
 * it is able to trap after raining.
 * 
 * Example:
 * Input: arr[] = [2, 0, 2]
 *  | |
 *  |_|
 * Output: 2
 * We can trap 2 units of water in the middle gap.
 * 
 * Example:
 * Input: arr[] = [3, 0, 0, 2, 0, 4]
 *      |
 * |    |
 * |  | |
 * |__|_|
 *  Output: 10 = 3 + 3 + 1 + 3 
 * 
 * LOGIC --BRUTE FORCE in O(n^2)
 * On any given arr position that is zero the amount of water depends on its
 * surrounding max values. That is: leftMax and rightMax. 
 * Add the min of both to the capacity.
 * 
 * If a given arr position is not zero and its leftMax and rightMax are have
 * bigger values, the amount of water that can be stored is:
 * min(leftMax,rigthMax) - arr[i], add to capacity 
 * 
 * Loop over the arr:
 * - findLeftMax
 * - findRightMax
 * - add to capacity
 * 
 * findLeftMax
 * - if i = 0, return i - there are no positions left of it to explore
 * - loop over all values to left and return the max
 * findRightMax
 * - if i = n - 1, return i - there are no positions right of it to explore
 * - loop over all values to the right and return the max
 * */
function findMaxCapacity(arr){
    const n = arr.length;
    let capacity = 0;
    for(let i = 0; i < n; i++){
        const leftMax  = arr[findLeftMax(arr, i)];
        const rightMax = arr[findRightMax(arr, i)];
        if(arr[i] === 0){
            capacity += leftMax >= rightMax ? rightMax : leftMax;
        } else if(arr[i] !== 0 && leftMax > arr[i] && rightMax > arr[i]){
            let minMax = leftMax >= rightMax ? rightMax : leftMax;
            capacity += minMax - arr[i];
        }
        //console.log(i,leftMax,rightMax, capacity)
    }
    return capacity;
}
function findLeftMax(arr, i){
    if(i === 0) return i;
    let max = i;
    while(i >= 0){
        if(arr[i] > arr[max]) max = i;
        //console.log('left', i, max);
        i--
    }
    return max;
}
function findRightMax(arr, i){
    const n = arr.length;
    if(i === n - 1) return i;
    let max = i;
    while(i < n){
        if(arr[i] > arr[max]) max = i;
        //console.log('right', i, max);
        i++
    }
    return max;
}
module.exports = findMaxCapacity;