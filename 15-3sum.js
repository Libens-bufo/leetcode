/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let nums = [0,0,0,0]

let nums2 = [-1, 0, 1, 2, -1, -4]

let nums3 = [1,-1,-1, -1, 0, 0]

//-1, -1, 1, 0

 var threeSum = function(nums) {
    nums =  nums.sort((a,b) =>  a - b)
    let arr = []
    let j, k; // num[j] left pointer, num[i] is right pointer

    for (let i = 0; i < nums.length-2; i++){

        // if ((nums[i] === 0) && (nums[i+1] == 0)){
        //     if (nums[i+2] === 0){
        //         if (nums[i+3] === 0) continue
        //         else{
        //             arr.push([0, 0, 0])
        //             continue
        //         }
        //     }
        // }
        if (nums[i] == nums[i - 1]) continue
        j = i + 1;
        k = nums.length - 1;

        while (j < k){
            console.log(i, j, k);
            if (nums[i] + nums[j] + nums[k] > 0) k--
            else if (nums[i] + nums[j] + nums[k] < 0) j++
            else {
                console.log('Bingo')
                arr.push([nums[i], nums[j], nums[k]])
                j++
                while ((j < k)&&(nums[j] === nums[j-1])) j++
            }
        }


    }
    return arr
};

console.log(nums2.sort((a,b,)=> a -b), threeSum(nums));