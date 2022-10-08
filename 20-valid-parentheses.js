/**
 * https://leetcode.com/problems/valid-parentheses
 * Time O(N) | Space O(N)
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {

    stack = []; //The Stack
    /*
    The stack is going to hold all of our OPENING parentheses. 
    Each time we get to an opening parentheses, we are gonna add it to the stack;
    Each time we get to an closing parenthesis, we need to check if the item on the top of the stack is a match.
    If it is, we pop it off of the stack to eliminate it (its valid)
    When we get to the end, if the stack is empty it means all the parenthesis were closed in the right order.
    */
    
    object = {')':'(', '}':'{', ']':'['} //Map of closing parenthesis - we use this instead of making comparisons
    /*/
    A Map or a list/array is just a better way of making comparisons than using a bunch of condition || condition || condition: DRY.

     https://frontstuff.io/a-better-way-to-perform-multiple-comparisons-in-javascript
    */

    for (const item of s.split('')) {
        if (item in object){
            if (stack && stack[stack.length - 1] === object[item]){
                stack.pop();
            }
        }else{
            stack.push(item);
        }
    }
    if (stack.length === 0) return true;
    return false;
}

console.log(isValid('()()[][()]'));