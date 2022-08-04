// let one = {'a': 2}
// let two = {'a': 2}
// console.log(JSON.stringify(one) == JSON.stringify(two));

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */


 var isAnagram = function(s, t) {

    return s.split('').sort().join('') === t.split('').sort().join(''); 
    if (s.length != t.length) return false;
    let map1 = new Map();
    let map2 = new Map();
    for (let i = 0; i < s.length; i++){
        if (map1.has(s[i])) map1.set(s[i], map1.get(s[i]) + 1);
        else map1.set(s[i], 1);

        if (map2.has(t[i])) map2.set(t[i], map2.get(t[i]) + 1);
        else map2.set(t[i], 1);
    }
    

    for (let el of map1.keys()){
        if (map2.has(el)){
            if (map2.get(el) == map1.get(el)) continue;
            else return false;
        }else return false
        console.log(map1.get(el));
    }
    return true

};

console.log(isAnagram('rac', 'car'));