var numOfStrings = function(patterns, word) {
    let count = 0;

    for(let p of patterns){
        let reg = new RegExp(p)
        reg.test(word) ? count++ : count
    }
      return count
};