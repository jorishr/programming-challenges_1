const fizzBuzz = require('./fizzBuzz');

describe('fizzbuzz test', () => {
    it('return fizz if divisible by three', () => {
        const expected = 'fizz';
        actual = fizzBuzz(3);
        expect(actual).toEqual(expected);
    }) 

    it('return buzz if divisible by five', () => {
        const expected = 'buzz';
        actual = fizzBuzz(5);
        expect(actual).toEqual(expected);
    }) 

    it('return fizzBuzz if divisible by three and five', () => {
        const expected = 'fizzBuzz';
        actual = fizzBuzz(15);
        expect(actual).toEqual(expected);
    })
    
    it('returns the correct value for array of values', () => {
        const expected = [
            'fizzBuzz',
            1,
            2,
            'fizz',
            4,
            'buzz',
            'fizz',
            7,
            8,
            'fizz',
            'buzz',
            11,
            'fizz',
            13,
            14,
            'fizzBuzz'
        ];
        const numbers = [];
        for(let i = 0; i < 16; i++){
            numbers.push(i);
        }
        const actual = numbers.map(fizzBuzz);
        expect(actual).toEqual(expected);
    }) 
});