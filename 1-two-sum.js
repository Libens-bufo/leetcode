/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i <nums.length; i++){       
        map.set(nums[i], i)                          // loads up the hashmap with Number => Index        
    }
    for(let i = 0; i < nums.length; i++){           // target - number = match/answer
        if (map.has(target - nums[i])){             // so, if the map has a match (match + number = target)
        if (i != map.get(target-nums[i])){          // AND the two numbers arent the same number at the same index
            return [i, map.get(target - nums[i])]   // return the answer: [index, value of map[target - num], which is the index of the match]
            }
        }
    }
}

/*
 
Below is the "slick" answer because we check the map before the value is loaded,
which means the first number in the pair won't be found, but that is OK because
we will find it once we get to the second number. The point of this is so there is no self-matching (ex. index0 + index0 = target)
which would be invalid (must be two different indices), so there is no need to do a check like on line 14. And we can do it in one loop.
 */

var twoSum = function(nums, target) {          
    const map = new Map();                      
    for(let i = 0; i < nums.length; i++){      
        if (map.has(target - nums[i])) return [i, map.get(target - nums[i])]    
        else map.set(nums[i], i)
        }
    }