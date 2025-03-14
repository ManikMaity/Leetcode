function containsDuplicate(nums: number[]): boolean {
    const map : {[num : number] : boolean} = {};
    for (let i = 0; i < nums.length; i++){
      if (map[nums[i]]){
        return true;
      }
      else {
        map[nums[i]] = true;
      }
    }
    return false;
};