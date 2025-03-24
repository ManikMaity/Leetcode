function generate(numRows: number): number[][] {
    const result = [[1], [1, 1]];
    if (numRows == 1) return [[1]];
    if (numRows == 2) return result;
    for (let i = 2; i < numRows; i++ ){
        let arr = result[result.length - 1];
        const temp : number[] = Array(arr.length + 1);
        temp[0] = arr[0];
        temp[temp.length - 1] = arr[arr.length - 1];
        let k = 1;
        for (let j = 0; j < arr.length - 1 && k < temp.length - 1; j++){
            temp[k] = arr[j] + arr[j + 1];
            k++
        }
        result.push(temp);
    }

    return result;

};