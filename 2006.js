var countKDifference = function(nums, k) {
    let count = 0;
    for(let i=0; i <= nums.length-1; i++){
        for(let j=i+1; j <= nums.length; j++){
            if(nums[i]-nums[j] == k || nums[i]-nums[j] == k*-1){
                count++;
            }
        }
    }
      return count
  };