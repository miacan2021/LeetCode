var decompressRLElist = function(nums) {
    let arr =[];
    for(let i=0; i < nums.length; i+=2){
        let j = nums[i];
        while (j > 0) {
            arr.push(nums[i + 1]);
            j--;
        }
    }
    
    return arr;
};