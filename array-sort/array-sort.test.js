const sort = require('./array-sort');

describe('Sort array test', () => {
    it('sort an array of numbers', () => {
        let expected = [1,2,3];
        let actual = sort([3,2,1]);
        expect(actual).toEqual(expected);

        expected = [-1,0,1,2,3];
        actual = sort([3,2,1,0,-1]);
        expect(actual).toEqual(expected);

        expected = [-1,0,1,2,3,10,20];
        actual = sort([3,2,1,0,-1, 20, 10]);
        expect(actual).toEqual(expected);
    });
    it('sort the array in reverse order', () => {
        let expected = [3,2,1];
        let actual = sort([3,2,1], true);
        expect(actual).toEqual(expected);

        expected = [3,2,1,0,-1];
        actual = sort([3,2,1,0,-1], true);
        expect(actual).toEqual(expected);

        expected = [20,10,3,2,1,0,-1];
        actual = sort([3,2,1,0,-1, 20, 10], true);
        expect(actual).toEqual(expected);
    });    
});
