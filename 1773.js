var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0;
    for(let item of items){
       if(ruleKey == 'type' && ruleValue == item[0]){
           count++;
       }else if(ruleKey == 'color' && ruleValue == item[1]){
           count++;
       }else if(ruleKey == 'name' && ruleValue == item[2]){
           count++;
    }
    }
    return count;
};