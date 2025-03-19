function maxSubArray(nums: number[]) {
  let maxSum = Number.NEGATIVE_INFINITY;
  let sum = 0;
  for (let i = 0; i < nums.length; i++){
    sum+= nums[i];
    if (sum > maxSum){
      maxSum = sum;
    }

    if (sum < 0){
      sum = 0;
    }
  }

  return maxSum;
}