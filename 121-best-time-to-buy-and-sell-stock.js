/**
 * @param {number[]} prices
 * @return {number}
 */
x = [7,1,5,6,3,4]
y = [7,6,4,3,1]
 var maxProfit = function(prices) {
    // max = 0
    // for (let i = 0; i < prices.length; i++){
    //     for(let j = i + 1; j < prices.length; j++)

    //     if (prices[j] - prices[i] > max) max = prices[j] - prices[i]
    // }
    // return max;

    // ---------------------------
    // let l = 0;    //l == buy
    // let r = 1;   // r == sell
    // let max = 0;

    // while (r < prices.length){
    //     if (prices[l] > prices[r]){
    //         temp = r;
    //         r+=1
    //         l = temp
    //     }
    //     if (prices[r] - prices[l] > max) {
    //         max = prices[r] - prices[l];
    //         console.log('max', max, 'lval', prices[l], 'rval', prices[r])
    //     }
    //     r++
    //     if (r == prices.length){
    //         l++
    //         r = l+1
    //     }
    // }
    // return max
    //    ------------------------
    let l = 0
    let max = 0
    for (let r = 1; r < prices.length; r++){
        if (prices[r] < prices[l]) l = r
        if (prices[r] - prices[l] > max) max = prices[r] - prices[l]
    }
    return max

};

console.log(maxProfit(x))



console.log(maxProfit(y));

function ranArr (name){
    for (let i = 0; i < 10; i++){
        name[i] = Math.floor((Math.random() * 30))
    }
    console.log(name);
}

const t1 = []
ranArr(t1)
console.log(t1)
console.log(maxProfit(t1))