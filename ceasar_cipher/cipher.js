/**
 * #############
 * CAESAR CIPHER
 * #############
 * It is a type of substitution cipher in which each letter in the plaintext
 * is replaced by a letter some fixed number of positions down the alphabet.
 * 
 * Example: 'abc' -> 'cde' or i + 2 
 * The general formula becomes: i + x % 26 because the array of characters is
 * used as a rotational array whereby the last index + x can be found by 
 * continuing the count at arr[0].  
 * 
 * - convert str to arr
 * - Find the index of the letter in the alphabet array.
 * - Find the nextIndex
 * - Update array
 * 
 * Accounting for negative values means you need to adapt the nextIndex
 * formula.
 */
function encrypt(str, decrypt = false, x = 2){
    const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
    const n = alphabet.length;
    let strArr = Array.from(str);
    for(let i = 0; i < strArr.length; i++){
        let alphabetIndex;
        for(let j = 0; j < n; j++){
            if(strArr[i] === alphabet[j]) alphabetIndex = j; 
        }
        if(!decrypt){
            //x < 0 find previous position
            const nextIndex = x > 0 ? (alphabetIndex + x) % n : (alphabetIndex + n + x) % n;
            strArr[i] = alphabet[nextIndex];
        } else {
            //x < 0 find next position
            const previousIndex = x > 0 ? (alphabetIndex + n - x) % n : (alphabetIndex - x) % n;
            strArr[i] = alphabet[previousIndex];
        }
    }
    return strArr.join('');
}
/**
 * The above solution works but is not very efficient. A better approach would
 * be to make use of character codes. That way there is no need to look up the
 * index in the alphabet through a loop.
 * 
 * - split the str into arr of single char strings
 * - map that arr of strings to arr of strings created by finding the next
 * character code index: 
 * The formula (i + x % 26) can be used whereby i = the original char code of
 * the str (charCodeAt() method)
 * To create the new string use the String constructor and the fromCharCode()
 * method.
 * - join the mapped array into a string 
 */
function encryptBetter(str, val){
    return str
        .split('')  //into arr of strings
        .map(str => {
            if(val < 0){
                return String.fromCharCode(str.charCodeAt() + 26 + val % 26);
            } else {
                return String.fromCharCode(str.charCodeAt() + val % 26);
            }
        })
        .join('');
}
function decryptBetter(str, val){
    return str
        .split('')
        .map(str => {
            if(val < 0){
                return String.fromCharCode(str.charCodeAt() - 26 - val % 26);

            } else {
                return String.fromCharCode(str.charCodeAt() - val % 26);
            }
        })
        .join('')
}
module.exports = {
    encrypt,
    encryptBetter,
    decryptBetter
}