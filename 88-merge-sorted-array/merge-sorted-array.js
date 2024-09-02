/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
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