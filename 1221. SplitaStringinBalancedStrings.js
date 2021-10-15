var balancedStringSplit = function(s) {
    let rCount=0;
    let lCount=0;
    let count=0;
    if(s.length==1){
        return;
    }
    for(let x of s){
        if(x==='R'){
            rCount++;
        }
        else{
            lCount++;
        }
        if(rCount===lCount){
            count++;
        }
    }
    return count;
};