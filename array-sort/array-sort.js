module.exports = (arr, reverse) => {
    return arr.sort((a,b) => {
        if(reverse) return b - a;   //descending order
        return a - b;   //normal ascending sorting behavior
    });
} 
