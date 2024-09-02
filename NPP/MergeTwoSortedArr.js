const nums1 = [1,2,3,5,10, 0, 0, 0];
const nums2 = [2,5,6];


/*
function mergeTwoSortedArr (arr1, arr2){
    const result = new Array(arr1.length + arr2.length)
    let i = 0;
    let j = 0;
    for (let k = 0; k < result.length; k++){
        if (i >= arr1.length){
            result[k] = arr2[j];
            j++;
        }

        if (j >= arr2.length){
            result[k] = arr1[i];
            i++;
        }

        if (arr1[i] < arr2[j]){
            result[k] = arr1[i];
            i++
        }
        else {
            result[k] = arr2[j];
            j++;
        }
    }

    return result;
}*/


function mergeTwoSortedArr(nums1, m, nums2, n) {

    let resultArr = new Array(m + n);
    let i  = 0; //for num1
    let j = 0; // for nums2
    let k = 0; // for result

    // while both array is not essusted
    while(i < m && j < n){
        if (nums1[i] < nums2[j]){
            resultArr[k] = nums1[i];
            i++;
            k++;
        }
        else{
            resultArr[k] = nums2[j];
            j++;
            k++;
        }
    }

    //if nums2 finished 
    while (i < m){
        resultArr[k] = nums1[i];
        i++;
        k++;
    }

    // if num1 is finished 
    while (j < n){
        resultArr[k] = nums2[j];
        j++;
        k++;
    }


    // coping the value of result to num1
    for (let i = 0; i < resultArr.length; i++){
        nums1[i] = resultArr[i];
    }

};
// Time Complexity -> O(m + n)

console.log(mergeTwoSortedArr(nums1, 5, nums2, 3));
