var findMedianSortedArrays = function(nums1, nums2) {
    const totalLen = nums1.length + nums2.length;
    let count = 0;

    while (count < Math.floor((totalLen-1)/2)) {
        if (nums1[0] < nums2[0]) {
            nums1.shift();
        } else {
            if (nums2.length > 0) {
                nums2.shift();
            } else {
                nums1.shift();
            }
        }
        count++;
    }

    if (totalLen % 2 === 1) {
        if (nums1.length === 0) {
            return nums2[0];
        } else if (nums2.length === 0) {
            return nums1[0];
        }
        return Math.min(nums1[0], nums2[0]);
    } else {
        if (nums1[0] < nums2[0]) {
            if (nums1.length === 0) {
                return ((nums2[0] + nums2[1])/2);
            } else if (nums2.length === 0) {
                return ((nums1[0] + nums1[1])/2);
            } else if (nums1.length === 1) {
                return ((nums1[0] + nums2[0])/2);    
            }
            return ((nums1[0] + Math.min(nums2[0], nums1[1]))/2);
        } else {
            if (nums1.length === 0) {
                return ((nums2[0] + nums2[1])/2);
            } else if (nums2.length === 0) {
                return ((nums1[0] + nums1[1])/2);
            } else if (nums2.length === 1) {
                return ((nums1[0] + nums2[0])/2);    
            }
            return ((nums2[0] + Math.min(nums2[1], nums1[0]))/2);
        }
    }
};