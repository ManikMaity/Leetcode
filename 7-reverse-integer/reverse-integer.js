/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // made a variable to store the reverse number
    let n = x;

    // negetive -> positive
    if (n < 0){
        n = n*(-1);
    }

    let rNum = 0;

    // looping to get last num
    while (n > 0){
        //last num
        let lNum = n%10;
        // stronging last num in reverse
        rNum = (rNum * 10) + lNum;
        // checking if exeded 32 bit num
        if (rNum > 2147483647) return 0;
        n = Math.floor(n/10); 
    }

    // positive -> negetive
    if (x < 0){
        rNum = rNum*(-1);
    }

   return rNum;
};