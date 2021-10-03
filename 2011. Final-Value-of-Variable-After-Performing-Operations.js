var finalValueAfterOperations = function(operations) {  
    let num = 0;
    for(let i = 0; i < operations.length; i++){
        if(operations[i] == "++X"){
        ++num;
        }else if(operations[i] == "X++"){
          num++;
        }else if(operations[i] == "--X"){
          --num;
        }else if(operations[i] == "X--"){
          num--;
        }
    }
    return num;
};