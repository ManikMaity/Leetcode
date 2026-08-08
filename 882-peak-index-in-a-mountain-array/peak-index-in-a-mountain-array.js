/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr = []) {
    let left = 0;
    let rigth = arr.length - 1;

    if (arr.length === 1) {
        return 0;
    }

    while(left <= rigth) {
        const mid = left + Math.floor((rigth - left) / 2);

        if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid +1]){
            return mid;
        }

        // increasing slop 

      else  if (arr[mid] > arr[mid - 1] || arr[mid] < arr[mid + 1]){
        left = mid + 1;
       }

        // decreasing slop
        else {
            rigth = mid - 1;
        }
    }

    return - 1;
};