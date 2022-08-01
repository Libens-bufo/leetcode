/**
 * @param {number[]} nums
 * @return {boolean}
 */

//Solution is O(n);

// This is one using a map. Best to use a set, because sets do not contain duplicates
var containsDuplicateWithMap = function(nums) {
    
    let map = new Map();
    for (let el of nums){
        if (!(map.get(el))) map.set(el, 1);
        else return true;
    }
    return map;
};


var containsDuplicate = function(nums) {
    
    let set = new Set();
    for (let el of nums){
        if (set.has(el)) return true;  //if the set contains element already, it is a duplicate
        set.add(el);                   // Otherwise, add the element to the set.
    }
    return false;
};


