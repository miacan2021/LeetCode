var countConsistentStrings = function(allowed, words) {
    let counter = 0;
    for(let word of words){
        let bool = true;
        for(let char of word){
        if(!allowed.includes(char)){
            bool = false
        }
        }
        if(bool) counter++
    }
    return counter
};