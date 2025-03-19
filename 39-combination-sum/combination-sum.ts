function recursivePick(
    nums : number[],
  target: number,
  tempArr: number[],
  pickIndex: number,
  result: number[][]
) {
    
    if (pickIndex == nums.length) {
        if (target == 0){
            result.push([...tempArr]);
        }
        return;
    }

    if (nums[pickIndex] <= target){
        tempArr.push(nums[pickIndex]);
        recursivePick(nums, target - nums[pickIndex], tempArr, pickIndex, result);
        tempArr.pop();
    }

    recursivePick(nums, target, tempArr, pickIndex + 1, result);
}

function combinationSum(candidates: number[], target: number): number[][] {
    const resultArr : number[][] = [];
    recursivePick(candidates, target, [], 0, resultArr);
    return resultArr;
};