/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

/*


Left pointer i
Right pointer j

while i < j:

    check the first and last index/ numbers at i and j
    if the sum is less than than target: i++
    elif the sum is greater than the target: j--
    else: the sum == target, return indices

*/
///////
 var twoSum = function(numbers, target) {
    
    let i = 0; let j =  (numbers.length - 1);

    while (i < j){
        if (numbers[i] + numbers[j] < target) i++
        else if (numbers[i] + numbers[j] > target) j--
        else return [i+1, j+1]

    }

};

console.log(twoSum([2,7,9,10,14,15], 19));