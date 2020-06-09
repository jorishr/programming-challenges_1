const canJumpToEndSimple = require('./jump').canJumptoEndSimple;
const canJumptoEndRecursively = require('./jump').canJumptoEndRecursively;

describe('Jump Game', () => {
    test('Simplfied Jump Game: can you reach the end of the array with given steps?', () => {
        expect(canJumpToEndSimple([1,2,3,4])).toBe(true);
        expect(canJumpToEndSimple([3,2,1,0,4])).toBe(false);
        expect(canJumpToEndSimple([2,3,1,1,4])).toBe(true);
    })
    test('Jump Game: recurive function', () => {
        expect(canJumptoEndRecursively([1,2,3,4])).toBe(true);
        expect(canJumptoEndRecursively([2,3,1,4])).toBe(true);
        expect(canJumptoEndRecursively([2,3,0,4])).toBe(true);
        expect(canJumptoEndRecursively([3,2,1,0,4])).toBe(false);
        expect(canJumptoEndRecursively([2,3,1,1,4])).toBe(true);
    })
})