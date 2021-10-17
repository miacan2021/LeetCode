var numberOfSteps = function(num) {
    let times = 0;
    while(num > 0){
        if(num % 2 === 0) {
            num = num / 2; 
             times++;
        }else{
            num = num - 1;
             times++;
        }
    }
    return times;
};