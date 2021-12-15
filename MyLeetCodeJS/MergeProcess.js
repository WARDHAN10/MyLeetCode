const merge = (nums1, m, nums2, n) => {

    let i = 0,
        j = 0,
        c = 0,
        arr3 = []
    for (; i < m && j < n;) {
        if (nums1[i] <= nums2[j]) {
            arr3[c++] = nums1[i++]
        } else {
            arr3[c++] = nums2[j++]
        }


    }

    for (; i < m;) {
        arr3[c++] = nums1[i++]
    }

    for (; j < n;) {
        arr3[c++] = nums2[j++]
    }

    for(let k = 0 ;k<arr3.length;k++){
        nums1[k] = arr3[k]
    }
    return nums1
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))