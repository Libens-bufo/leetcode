
/**
 * 
 * @param {string} l 
 * @returns {boolean}
 * 
 * isAlpha aka is alphanumic character: A - Z, a - z, or 0-9
 * function checks if the string is a letter or a a number and does not consider spaces alphanumeric
 */
const isAlpha = (l) => { 
    console.log(l);
    if (l == ' ') return false;
    return ((l.toUpperCase()!= l.toLowerCase()) || (!isNaN(Number(l)))  )
}

/**
 * @param {string} s
 * @return {boolean}
 */
// time: O(n)
var isPalindrome = function(s) {
    s = s.toLowerCase();
    console.log(s);
    let i = 0;                                  //pointer to first letter
    let j = s.length - 1                        //pointer on right side of string (last letter)
    while (i < j){

        while ((i < j) && !isAlpha(s[i])) i++    // this will move the pointer on the leftif it isn't alphanumberic
        while ((i < j) && !isAlpha(s[j])) j--    // same but for the right

        if (s[i] != s[j]) return false           // wouldnt be a palindrome, return false

        i++                                      // move pointers
        j--
    }
    return true
    }












