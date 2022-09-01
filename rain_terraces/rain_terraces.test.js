const findMaxCapacity = require('./rain_terraces');

describe('Rain terraces capacity computation', () => {
    test('Returns an integer representing units of water capacity', () => {
        expect(findMaxCapacity([])).toBe(0);
        expect(findMaxCapacity([1, 0, 0, 0])).toBe(0);
        expect(findMaxCapacity([0, 0, 0, 1])).toBe(0);
        expect(findMaxCapacity([0, 1, 1, 0])).toBe(0);
        expect(findMaxCapacity([2, 0, 0, 2])).toBe(4);
        expect(findMaxCapacity([3, 0, 0, 2, 0, 4])).toBe(10);
        expect(findMaxCapacity([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
    })
})