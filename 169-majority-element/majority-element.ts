function majorityElement(nums: number[]): number {
    const hashMap : {[num : string] : number} = {};
    for (let i= 0; i < nums.length; i++){
      let key = `${nums[i]}`
      if (hashMap[key]){
        hashMap[key]++;
      }
      else {
        hashMap[key] = 1;
      }
    }

    for (let key in hashMap){
       if (hashMap[key] >= Math.ceil(nums.length / 2)){
        return Number(key);
      }
    }

    return -1;
};
