var sortSentence = function(s) {
    const sp = s.split(' ')
    let arr = []
    for(let i = 0; i < sp.length; i++){
        let index = sp[i].slice(-1);
        let word = sp[i].slice(0, -1);
        arr[index-1] = word;
    }
    return arr.join(' ')
};