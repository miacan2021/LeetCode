var maxDepth = function(s) {
    let max = 0;
    let counter = 0;
    
    for(let i =0; i < s.length; i++){
        let char = s[i];
        if(char == '('){
            counter++;
            max = Math.max(max, counter)
        }
        if(char == ')'){
            counter--;
            max = Math.max(max, counter)
        }
    }
     return max;
};