var reversePrefix = function(word, ch) {
    if(word.includes(ch) == false){
        return word
    }else{
    const point = word.indexOf(ch)
    const last = word.substring(point+1)
    let start = word.slice(0, point+1)
    start = start.split('').reverse().join('')
    return start + last
    }
};