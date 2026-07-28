/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let k = 0;
    let i = 0;

    while (n >= k){
        i++;
        k = k + i;
    }

    return i - 1
};
