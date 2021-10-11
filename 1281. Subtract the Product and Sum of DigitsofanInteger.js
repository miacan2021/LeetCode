var subtractProductAndSum = function(n) {
    let num = String(n).split('');
    let mul = 1;
    let sum = 0;
    for(let n of num){
        mul *= n*1;
        sum += n*1;
    }
    return mul - sum;
};
