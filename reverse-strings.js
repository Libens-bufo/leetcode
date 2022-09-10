/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    
    //Swapping function takes indices to swap and the array itself
    const swapArrayElements = (i, j, arr) => {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    
    let j = s.length - 1, i = 0;
    
    while (i < j){
        
        swapArrayElements(i, j, s);
        
        i++;
        j--;
        
    }
};