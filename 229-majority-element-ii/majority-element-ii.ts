function majorityElement(nums: number[]): number[] {
  let ele1, ele2, count1 = 0, count2 = 0;
  for (let i = 0; i < nums.length; i++){
    if (count1 == 0 && nums[i] !== ele2){
        ele1 = nums[i];
        count1 = 1;
    }
    else if(count2 == 0 && nums[i] !== ele1){
        ele2 = nums[i];
        count2 = 1;
    }
    else if (nums[i] == ele1){
        count1++;
    }
    else if (nums[i] == ele2){
        count2++;
    }
    else {
        count1--;
        count2--;
    }
  }
    let rCount1 = 0, rCount2 = 0;
    const result = [];
    for (let i = 0; i < nums.length; i++){
        if (nums[i] == ele1){
            rCount1++;
        }
        else if (nums[i] == ele2){
            rCount2++;
        }
    }

   
    if (rCount1 > (nums.length / 3)) result.push(ele1);
    if (rCount2 > (nums.length / 3)) result.push(ele2);

    return result;
};