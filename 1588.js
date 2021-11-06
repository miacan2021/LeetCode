var sumOddLengthSubarrays = function(arr) {
    let i=1;
    let total=0;
    while(i<=arr.length){
      for(let j=0; j<=arr.length-i; j++){
        for(let k=j ;k<i+j ;k++){
            total+=arr[k]
        }
      }
    i+=2
    }
    return total
};

//need recap