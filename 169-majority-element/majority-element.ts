function majorityElement(nums: number[]): number {
    let ele;
    let count = 0;
    for (let i = 0; i < nums.length; i++){
        if (count == 0){
            ele = nums[i];
            count = 1;
        }
        else if (ele == nums[i]){
            count++;
        }
        else {
            count--;
        }
    };

    let count2 = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] == ele){
            count2++;
        }
    }

    if (count2 > (nums.length / 2)) {
        return ele;
    }
    return null;
};
