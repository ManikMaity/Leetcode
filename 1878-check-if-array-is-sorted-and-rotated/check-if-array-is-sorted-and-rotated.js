/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {

    // BRUTE FORSE WAY
    // function checkSorted(arr = []) {
    //   let isSorted = true;
    //     for(let i = 0; i < arr.length - 1; i++) {
    //       if (arr[i] > arr[i + 1]){
    //         isSorted = false;
    //       }
    //     }
    //     return isSorted;
    // }

    // let n = nums.length;
    // for (let i = 0; i < n; i++){
    //   const is = checkSorted(nums);
    //   if (is) {
    //     return true;
    //   }
    //   let ele =  nums.shift();
    //   nums.push(ele);
    //   console.log(nums)
    // }

    // return false;


    // MORE OPTIMIZED WAY -  POINTER
    const arr = [...nums, ...nums];
    const n = arr.length;
    
    let r = 0;
    let count = 1;
    while(r < arr.length - 1) {
        if (arr[r + 1] >= arr[r]) {
            r++;;
            count++;
        }
        else {
            r++;
            count = 1
        }

        if (count >= nums.length){
            return true
        }
    };

    return false
};