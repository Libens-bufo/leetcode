/**
 * @param {string[]} sentences
 * @return {number}
 */
 var mostWordsFound = function(s) {
    let max = 0;

    for(let i = 0; i < s.length; i++){

        max =  Math.max(s[i].split(' ').length, max)

    }
    
    return max;
    
};