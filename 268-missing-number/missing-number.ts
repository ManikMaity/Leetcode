function missingNumber(nums: number[]): number {
    const sortedNum = nums.sort((a, b) => a - b);
    for (let i = 0; i < sortedNum.length; i++){
      if (sortedNum[i] !== i) return i;
    }
    return sortedNum[sortedNum.length - 1] + 1
};