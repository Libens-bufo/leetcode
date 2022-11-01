/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    //Initialize a hash map/object.
    //Loop over array nums, and count each number.
    //If number is not in map, add to map with count of 1
    //If number is in map, increment count
    //----
    //Initialize an array and fill it.
    //Iterate through the map: The key gets pushed to the array index === value of key/val
    //Iterate backwards through array to get the k most frequent in order
    const map = {};
    for (let number of nums){
        if (!map[number]) map[number] = 1;
        else{
            map[number] = map[number] + 1;
        }
    }
  
    const bucket = Array(nums.length + 1).fill().map(el => []); 
    console.log(map)
    for (let [key, value] of Object.entries(map)){
        bucket[value].push(+key);
    }
  
    const result = []
    for(let i = bucket.length - 1; i >= 0; i--){
      if (bucket[i].length){
        bucket[i].forEach((el) => {
          if (result.length < k) result.push(el)
        })
        if (result.length == k) return result;
      }
    }
  };
