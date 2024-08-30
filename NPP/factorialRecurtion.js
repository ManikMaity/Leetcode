// Time complexity - O(n)
// Space Complexity - O(n) because func are waiting in stake
function factorial(n){
    if (n == 1){
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}

const r = factorial(4);
console.log(r);