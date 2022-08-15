var lengthOfLongestSubstring = function(s) {
    let max = 0
    let l = 0
    let set = new Set()
    
    for (let r = 0; r < s.length; r++){
        while (set.has(s[r])){                  //we have reached a repeating character
            set.delete(s[l])                    // delete the far left
            l++                                 //continue until its a substring without repeats
        }
        set.add(s[r])                           
        max = Math.max(max, set.size)
    }
    return max
};