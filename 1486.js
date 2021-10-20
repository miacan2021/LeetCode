var xorOperation = function(n, start) {
    let nums;
    for(let i =0; i < n; i++){
       nums = nums^start
        start+=2
    }
   return nums
};