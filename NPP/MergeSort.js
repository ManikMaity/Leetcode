let arr = [65, 5, 23, 10, 74, 6, 0, 5];


function mergeSort(arr = []){
    arr = mergeSortHelper(arr, 0, arr.length - 1)
}

function mergeSortHelper(arr = [], start, end){
    if (start == end) return arr;
    let mid = Math.floor(start + end / 2);
    let left = mergeSortHelper(arr, start, mid);
    let right = mergeSortHelper(arr, mid, end);
    return mergeTwoSortedArr(left, right);
}

function mergeTwoSortedArr (leftArr = [], rightArr = []){
    let result = [];
    let i = 0;
    let j = 0;

    while(i < leftArr.length && j < rightArr.length){
        if (leftArr[i] < rightArr[j]){
            result.push(leftArr[i]);
            i++;
        }
        else {
            result.push(rightArr[j]);
            j++;
        }
    }

    while(i < leftArr.length){
        result.push(leftArr[i]);
        i++;
    }

    while (j < rightArr.length){
        result.push(rightArr[j]);
        j++
    }

    return result;
}


mergeSort(arr);
console.log(arr);