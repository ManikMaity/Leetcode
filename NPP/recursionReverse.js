const test = [5, 5, 4, 6, 4];
/*let i = 0;
let j = test.length - 1;
function reverse(i, j) {
    if (i > j) {
        return;
    }
    [test[i], test[j]] = [test[j], test[i]];
    reverse(i + 1, j - 1);
}
reverse(i, j);*/


// using one variable (length - 1 - index)

let i  = 0;
let n = test.length;
function swapValue (i){
    if (i >= Math.ceil(n/2) ) return;
    [test[i], test[n - i - 1]] = [test[n - 1 - i], test[i]];
    i++;
    swapValue(i, n - i - 1);
}

swapValue(i, n - i - 1);



console.log(test); // first -> [ 4, 6, 4, 5, 5 ] // second ->[ 4, 6, 4, 5, 5 ]