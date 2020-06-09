const encrypt = require('./cipher');

describe('Encrypt/Decrypt a string using Ceasar Cipher', () => {
    test('Encrypt by shifting letter x posiitions in alphabet', () => {
        expect(encrypt('aaaa')).toBe('cccc');
        expect(encrypt('aaaa', false, 30)).toBe('eeee');
        expect(encrypt('aaaa', false, -1)).toBe('zzzz');
        expect(encrypt('zzzz', true, -1)).toBe('aaaa');
        expect(encrypt('cdef', true)).toBe('abcd');
    })
})