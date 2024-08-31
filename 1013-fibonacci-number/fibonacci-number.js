/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    
    function getFibonacci(n) {
        if (n <= 1){
            return n;
        }
        else {
            return getFibonacci(n - 1) + getFibonacci(n - 2);
        }
    }

    return getFibonacci(n);
};