// nums = [2, 2, 1] => 1
// nums = [2, 3, 3, 4, 4] => 2

//function takes a parameter 'nums', an array. Length?
//function finds the single number and returns the number
//Solution must be O(n) and use constant space.

function singleNumber (nums){
    let result = 0;
    for (let i = 0; i < nums.length; i++){
        result = result ^ nums[i];
    }
    return result;
}

//
//
//
//
//
//
//
//
