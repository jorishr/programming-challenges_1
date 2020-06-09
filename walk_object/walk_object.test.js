const walkObj = require('./walk_object');

describe('Walk object', () => {
    test('Should return the value for a key if key is present in object', () => {
        const obj1 = {
            foo: 1 
        }
        const obj2 = {
            foo: {
                bar: 1
            }
        }
        const obj3 = {
            foo: {
                bar: 1
            },
            foos: {
                bars: 2
            }
        }
        expect(walkObj(obj1, 'foo')).toEqual(1);       
        expect(walkObj(obj2, 'bar')).toEqual(1);       
        expect(walkObj(obj3, 'bars')).toEqual(2);       
        expect(walkObj(obj3, 'hello')).toEqual(null);       
    })
        
})
