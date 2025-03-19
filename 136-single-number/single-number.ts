function singleNumber (nums : number[]) {
  const map : {[num : string] : number} = {};
  for (let i = 0; i < nums.length; i++){
    if (map.hasOwnProperty(nums[i])){
      map[nums[i]]++;
    }
    else {
      map[nums[i]] = 1;
    }
  }

  for (let num in map){
    if (map[num] == 1) return Number(num);
  }

  return -1;
}
