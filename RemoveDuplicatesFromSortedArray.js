var removeDuplicates = function(nums) {
    let k = 0;
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if (nums[i]==nums[j] && i!=j){
                nums.splice(j,1)
                j--
                k++
            }
        }
    }
};

nums = [0,0,1,1,1,2,2,3,3,4]
removeDuplicates(nums)
console.log(nums)