/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    let xString = x.toString();

    // two pointers
    let i = 0; 
    let j = xString.length - 1;
    while(i <= j){
        if (xString[i] !== xString[j]){
            return false;
        }
        else {
            i++;
            j--;
        }
    }

    return true;

};