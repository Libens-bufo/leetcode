

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */


 var isAnagram = function(s, t) {

    //slow, one liner: return s.split('').sort().join('') === t.split('').sort().join(''); 
    if (s.length != t.length) return false;                     //anagrams have equal length
    let map1 = new Map();
    let map2 = new Map();                                       //create maps
    for (let i = 0; i < s.length; i++){
        if (map1.has(s[i])) map1.set(s[i], map1.get(s[i]) + 1); //add one to count(value) of each letter(key) if key exists
        else map1.set(s[i], 1);                                 // otherwise, create key and set count to 1

        if (map2.has(t[i])) map2.set(t[i], map2.get(t[i]) + 1); //again for other string
        else map2.set(t[i], 1);
    }
    

    for (let el of map1.keys()){                                //compare the two using loop
        if (map2.has(el)){                                      //if key exists in both AND
            if (map2.get(el) == map1.get(el)) continue;         //the values are the same for both map1 and map2, continue
            else return false;                                  //otherwise, they are not anagrams
        }else return false
    }
    return true                                                 //if we are here, they are proven to be anagrams

};
