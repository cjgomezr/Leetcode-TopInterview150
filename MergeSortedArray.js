nums1 = [4,5,6,0,0,0], m = 3, nums2 = [1,2,3], n = 3

var merge = function(nums1, m, nums2, n) {
    nums1.splice(-n,n);
    nums2.forEach(num => nums1.push(num))

    for (let j=0;j<nums1.length;j++){
        for(let i=0;i<nums1.length;i++){
            let x = nums1[j]
            let y = nums1[i]
            if (y>x){
                nums1[i] = x
                nums1[j] = y
            }

        }

    }    
};

merge(nums1, m, nums2, n)
console.log(nums1)