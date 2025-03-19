function longestConsecutive(nums : number[]) : number {
    if (nums.length == 0) return 0;
    const sortedNums = nums.sort((a, b) => a - b);
    let maxLen = 1;
    let temp = 1;
    let i = 0, j = 1;
    while(i < nums.length && j < nums.length){
        if (sortedNums[i] + 1 == sortedNums[j]){
            temp ++;
            i ++;
            j++;
        }
        else if (sortedNums[j] === sortedNums[i]){
            i++;
            j++;
        }
        else {
            i = j;
            j = i+ 1;
            temp = 1;
        }

        maxLen = Math.max(temp, maxLen);
    }

    return maxLen;
}
