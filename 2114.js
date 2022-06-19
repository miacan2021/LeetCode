var mostWordsFound = function(sentences) {
    const countedNum = [];
    for (let sentence of sentences) {
        countedNum.push(sentence.split(' ').length)
    }
    return countedNum.sort((a, b) => a - b).pop()
};