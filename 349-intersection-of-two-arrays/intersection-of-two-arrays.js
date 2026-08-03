/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const map = new Map();
    let out = [];

    for (let i = 0; i < nums1.length; i++) {
        const num  = nums1[i];
        const has = map.has(num);

        if (!has) {
            map.set(num, 1);
        }
    }


    for (let i = 0; i < nums2.length; i++) {
        if (map.has(nums2[i])) {
            out.push(nums2[i]);
            map.delete(nums2[i])
        }
    }

    return out;
};
