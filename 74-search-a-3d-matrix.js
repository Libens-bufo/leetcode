const binarySearch = function(arr, target){
    low = 0;
    high = arr.length - 1;

    while (low <= high){
        mid = Math.trunc((low + high) / 2);

        if(arr[mid] == target) return true;
        else if (arr[mid] > target) high = mid - 1;
        else if (arr[mid] < target) low = mid + 1;
    }
    return false;
}

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    low = 0;
    high  = matrix.length - 1;

    while (low <= high){
        
        mid = Math.trunc((low + high) / 2) //integer division
        arr = matrix[mid];
        lastIndexOfMid = [matrix[mid].length - 1];

        console.log(low, high, mid, "matrix[mid]:", matrix[mid], (matrix[mid][0]), matrix[mid][lastIndexOfMid] )

        if( (target >= matrix[mid][0]) & (target <= matrix[mid][lastIndexOfMid])){
            return binarySearch(matrix[mid], target)
        } 
        else if(matrix[mid][lastIndexOfMid] < target){
            low = mid + 1;
        } 
        else if(matrix[mid][0] > target){
            high = mid - 1;

        }
        else console.log("else")
    }
    return false;
    
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 4));