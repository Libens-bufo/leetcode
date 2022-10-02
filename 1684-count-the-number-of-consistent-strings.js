/**
 * @param {string} a
 * @param {string[]} words
 * @return {number}
 */
 var countConsistentStrings = function(a, words) {
    const set = new Set()
    for(let i = 0; i < a.length; i++){
        set.add(a[i])
    }
    let flag = true
    let count = 0
    for (let el of words){
        for(let i = 0; i < el.length; i++){
            if (!set.has(el[i])) flag = false;

        }
        if (flag) count++
        flag = true
    }
    return count;
};

//