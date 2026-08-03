/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const map = new Map();
    let out = [];

    for (let i = 0; i < nums1.length; i++) {
        const num  = nums1[i];
        const val = map.get(num);

        if (!val) {
            map.set(num, 1);
        }
        else {
            map.set(num, val + 1)
        }
    }


    for (let i = 0; i < nums2.length; i++) {
       const num = nums2[i];
       const val = map.get(num);
       
       if (val > 0) {
        out.push(num);
        map.set(num, val - 1);
       }
    }

    return out; 
};