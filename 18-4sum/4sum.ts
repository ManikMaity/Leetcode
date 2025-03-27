function fourSum(nums: number[], target: number): number[][] {
    const result : number[][] = [];
    const sorted = [...nums].sort((a, b) =>  a - b);
    for (let i = 0; i < sorted.length - 3; i++){
        if (i > 0 && sorted[i] == sorted[i - 1]) continue;
        for (let j = i + 1; j < sorted.length - 2; j++){
            if (j > i + 1 && sorted[j] == sorted[j - 1]) continue;
            let k = j + 1;
            let l = sorted.length - 1;
            while(k < l){
                let sum = sorted[i] + sorted[j] + sorted[k] + sorted[l];
                if(sum > target){
                    l--;
                }
                else if (sum < target){
                    k++;
                }
                else {
                    result.push([sorted[i], sorted[j], sorted[k], sorted[l]]);
                    k++; l--;
                    while(k < l && sorted[k] === sorted[k - 1]){
                        k++;
                    }
                    while(k < l && sorted[l] === sorted[l + 1]){
                        l--;
                    }
                }
            }
        }
    }
    return result;
};