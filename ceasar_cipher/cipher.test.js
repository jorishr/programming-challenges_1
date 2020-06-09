const encrypt = require('./cipher').encrypt;
const encryptBetter = require('./cipher').encryptBetter;
const decryptBetter = require('./cipher').decryptBetter;

describe('Encrypt/Decrypt a string using Ceasar Cipher', () => {
    test('Encrypt by shifting letter x posiitions in alphabet', () => {
        expect(encrypt('aaaa')).toBe('cccc');
        expect(encrypt('aaaa', false, 30)).toBe('eeee');
        expect(encrypt('aaaa', false, -1)).toBe('zzzz');
        expect(encrypt('zzzz', true, -1)).toBe('aaaa');
        expect(encrypt('cdef', true)).toBe('abcd');
    })
    test('EncryptBetter fn', () => {
        expect(encryptBetter('aaaa', 2)).toBe('cccc');
        expect(encryptBetter('aaaa', 30)).toBe('eeee');
        expect(encryptBetter('aaaa', -1)).toBe('zzzz');
    })
    test('DecryptBetter fn', () => {
        expect(decryptBetter('cccc', 2)).toBe('aaaa');
        expect(decryptBetter('eeee', 30)).toBe('aaaa');
        expect(decryptBetter('zzzz', -1)).toBe('aaaa');
    })
})