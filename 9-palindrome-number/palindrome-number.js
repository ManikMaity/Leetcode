/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
 
   // Using number extarction
    if (x < 0){
        return false;
    }

  let n = x;
  let rNum = 0;

  while (n != 0){
    let lNum = n%10;
    rNum = (rNum*10) + lNum;
    n = Math.floor(n/10)
  }

    if (x === rNum){
        return true;
    }
    return false;

};