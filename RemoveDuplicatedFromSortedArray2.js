nums = [0,0,1,1,1,1,2,2,2,3,3,3,4,5,5,6,1,1,1,1,2,2,2]

var removeDuplicates = function(nums) {
    let k = 2;

    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[k - 2]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return (k)
};

k=removeDuplicates(nums)
console.log(nums)
console.log(k)

