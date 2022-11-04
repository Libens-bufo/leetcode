/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let sum = 0;
    let answer = []
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
        answer.push(sum);
    }
    return answer;
};