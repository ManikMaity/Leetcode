const nums1 = [1,2,3,5,10, 0, 0, 0];
const nums2 = [2,5,6];
let m = 5;
let n = 3;

function mergeTwoSortedArrWithoutExtra(num1, m, nums2, n){
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (i >= 0 && j >= 0){
        if (num1[i] > nums2[j]){
            num1[k] = num1[i];
            i--;
            k--;
        }
        else {
            nums1[k] = nums2[j];
            j--;
            k--;
        }
    }

    while(j >= 0){
        nums1[k] = nums2[j];
        j--;
        k--;
    }
    
}

mergeTwoSortedArrWithoutExtra(nums1, m, nums2, n);
console.log(nums1);