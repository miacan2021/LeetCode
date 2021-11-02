var findGCD = function(nums) {
    nums.sort((a,b) => a-b);
    let max = 0;
    for(let i = 1; i <= nums[nums.length-1]; i++){
        nums[0] % i == 0 && nums[nums.length-1] % i == 0 ? max = i : max = max;
    }
    return max
};