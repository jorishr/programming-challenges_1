/**
 * #############
 * CEASAR CIPHER
 * #############
 * It is a type of substitution cipher in which each letter in the plaintext
 * is replaced by a letter some fixed number of positions down the alphabet.
 * 
 * Example: 'abc' -> 'cde' or i + 2 
 * The general formula becomes: i + x % 26 because the array of characters is
 * used as a rotational array whereby the last index + x can be found by 
 * countinuing the count at arr[0].  
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
    return strArr.toString().split(',').join('');
}
module.exports = encrypt;