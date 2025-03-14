function merge(intervals: number[][]) : number[][] {
    const sortedNumber = intervals.sort((a, b) => a[0] - b[0]);
    const mergeData : number[][] = [];
    for (let i = 0; i < sortedNumber.length; i++){
      if (mergeData.length == 0 || mergeData[mergeData.length - 1][1] < intervals[i][0])
      {
        mergeData.push(intervals[i]);
      }
      else {
        const left = Math.min(mergeData[mergeData.length - 1][0], intervals[i][0]);
        const right = Math.max(mergeData[mergeData.length - 1][1], intervals[i][1])
        mergeData[mergeData.length - 1][0] = left;
        mergeData[mergeData.length - 1][1] = right;
      }
    }

    return mergeData;
};
