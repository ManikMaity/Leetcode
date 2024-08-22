/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {

    /*
    if (nums.length < 2) return nums;
    for (let i = 0; i < nums.length - 1; i++){
        let minValue = i;
        for (let j = i +1; j < nums.length; j++){
            if (nums[j] < nums[minValue]){
                minValue = j;
            }
        }

        // swaping 
        if (nums[minValue] != nums[i]){
            let temp = nums[i];
            nums[i] = nums[minValue];
            nums[minValue] = temp;
        }

    }*/
    // using frequency mapping
    let map = {0: 0, 1: 0, 2: 0};
    for (let i = 0; i < nums.length; i++){
        map[nums[i]] += 1;
    }

    let idx = 0;
   for (let color = 0; color < 3; color++){
    let fq = map[color];
    for (let i = 0; i < fq; i++){
        nums[idx] = color;
        idx++;
        
    }
   }


    return nums;
};