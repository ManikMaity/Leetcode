function divideArray(nums: number[]): boolean {
    if (nums.length % 2 !== 0) return false;
    const map : {[num : number] : number} = {};
    for (let i = 0; i < nums.length; i++){
      if (map.hasOwnProperty(nums[i])){
        map[nums[i]]++;
      }
      else {
        map[nums[i]] = 1;
      }
    }

    for (let key in map){
      if (map[key] % 2 !== 0) return false;
    }

    return true;
};