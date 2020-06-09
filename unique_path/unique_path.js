/**
 * ###################
 * UNIQUE PATH PROBLEM 
 * ###################
 * A robot is located at the top-left corner of a m x n grid 
 * The robot can only move either down or right at any point in time. 
 * The robot is trying to reach the bottom-right corner of the grid.
 * 
 * How many possible unique paths are there? 
 * 
 * LOGIC
 * If n or m is 1, there is only one path: a straigth line move to the right
 * or down. Use recursion to get to that baseline scenario and add up all the
 * numbers for going down and right.
 * */
function findNumberOfPaths(n , m){
    //n = rows, m = columns
    if(n === 1 || m === 1) return 1;
    return findNumberOfPaths(n - 1, m)  //down 
            + findNumberOfPaths(n, m - 1)   //right
            //+ findNumberOfPaths(n -1, m - 1); //diagonal movement
}
module.exports = findNumberOfPaths;