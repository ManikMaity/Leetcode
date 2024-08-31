/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    let text = s.toLowerCase().replace(/[\W_]+/g,"");
    let j = 0;
    let n = text.length;
    
    function checkPalindrome(i) {
        if (i > Math.ceil(n/2)){
            return true;
        }
        else if (text[i] != text[n - 1 - i]){
            return false;
        }
        else {
            i++;
            return checkPalindrome(i);
        }
    }

    let result = checkPalindrome(j);
    return result;
   
};