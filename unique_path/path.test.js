const findNumberOfPaths = require('./unique_path');

describe('Unique paths to get from top left to bottom right in a n * m matrix', () => {
    test('Count the number of unique paths', () => {
        expect(findNumberOfPaths(1,1)).toBe(1);
        expect(findNumberOfPaths(3,3)).toBe(6);
        expect(findNumberOfPaths(4,4)).toBe(20);
        expect(findNumberOfPaths(3,2)).toBe(3);
        expect(findNumberOfPaths(2,3)).toBe(3);
    })
})