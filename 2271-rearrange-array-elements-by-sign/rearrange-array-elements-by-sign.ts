function rearrangeArray(nums: number[]) {
  const resultArr = Array(nums.length);
  let nPos = 1, pPos = 0;
  for (let i = 0; i < nums.length; i++){
    if (nums[i] < 0){
      resultArr[nPos] = nums[i];
      nPos+= 2;
    }
    else {
      resultArr[pPos] = nums[i];
      pPos += 2;
    }
  }

  return resultArr;
}