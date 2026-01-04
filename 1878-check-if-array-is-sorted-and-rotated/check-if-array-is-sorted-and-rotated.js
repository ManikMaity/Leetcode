/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    function checkSorted(arr = []) {
      let isSorted = true;
        for(let i = 0; i < arr.length - 1; i++) {
          if (arr[i] > arr[i + 1]){
            isSorted = false;
          }
        }
        return isSorted;
    }

    let n = nums.length;
    for (let i = 0; i < n; i++){
      const is = checkSorted(nums);
      if (is) {
        return true;
      }
      let ele =  nums.shift();
      nums.push(ele);
      console.log(nums)
    }

    return false;
  
};