function twoSum(nums: number[], target: number): number[] {
  const hashMap: { [num: number]: number } = {};
  for (let i = 0; i < nums.length; i++){
    const remain = target - nums[i];
    if (hashMap.hasOwnProperty(remain)){
        return [hashMap[remain], i];
    }
    else {
        hashMap[nums[i]] = i;
    }
  }
  return [0, 0];
}