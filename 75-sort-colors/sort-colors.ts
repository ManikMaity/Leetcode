/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors (nums : number[]) : void{
   if (nums.length < 2) return;
  let low = 0, mid = 0, high = nums.length - 1;
  while(mid <= high){
    if (nums[mid] == 0){
      [nums[low], nums[mid]] = [nums[mid], nums[low]]
      mid++;
      low++;
    }
    else if (nums[mid] == 2){
      [nums[high], nums[mid]] = [nums[mid], nums[high]];
      high--;
    }
    else {
      mid++;
    }
  }
}
