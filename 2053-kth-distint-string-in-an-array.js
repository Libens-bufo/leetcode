/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
 var kthDistinct = function(arr, k) {
    
    const map = new Map();
    let count = 0;
    let ones = [];
    
    for (let i = 0; i< arr.length; i++){
        if (!map.has(arr[i])) map.set(arr[i], 1)
        else map.set(arr[i], map.get(arr[i]) + 1)
    }
    for (let el of map.values()){
        if (el == '1') ones.push(el);
    }
    
    if (ones.length < k) return "";
    if (ones.length == arr.length) return arr[k-1];
    
    for (let i = 0; i< arr.length; i++){
        if (map.get(arr[i]) == 1){
            count++
            if (k == count) return arr[i];
            
        }
    }
};