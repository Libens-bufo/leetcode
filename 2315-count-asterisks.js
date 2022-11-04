/**
 * @param {string} s
 * @return {number}
 */
 var countAsterisks = function(s) {
    let flag = false;
    let count = 0;
    for(let i=0;i<s.length;i++){
       if (s.charAt(i) == '|') flag = !flag;
        if (flag) continue
        else{
            if (s.charAt(i) == '*') count++;
        }
    }
    return count;
    
};