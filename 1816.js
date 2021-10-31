var truncateSentence = function (s, k) {
    let arr = s.split(' ');
    arr.length = k;
    return arr.join(' ')
};