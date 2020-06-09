/**
 * ###########
 * WALK OBJECT
 * ###########
 * Write a function that can find a key in an object. That key can be nested. 
 * 
 * Example: 
 * - Find 'foo' in: 
 * obj = {
 *      foo: 1
 * }
 * - Find 'bar' in: 
 * obj = {
 *      foo: {
 *          bar: 1
 *      }
 * }
 * - Find 'bars' in: 
 * obj = {
 *      foo: {
 *          bar: 1
 *      },
 *      foos: {
 *          bars: 2
 *      }
 * }
 * There are two base scenarios:
 * - the key is property of the object, easily found with obj[key]
 * - the is nested, which means we have to check the content of each key-value
 * pair.
 * Thus if an object key has a value that also an object, we can make a 
 * recursive call. If it is not an object, that key-value pair cannot contain
 * the key we are looking for. 
 */
module.exports = function walkObj(obj, searchKey){
    //key is direct property of the obj
    if(obj[searchKey]) return obj[searchKey];

    const keys = Object.keys(obj);
    for(let key of keys){
        if(typeof obj[key] === 'object'){
            const val = walkObj(obj[key], searchKey);
            if(val) return val;
        }
    }
    return null;
}