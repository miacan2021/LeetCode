var arrayStringsAreEqual = function (word1, word2) {
    word1 = word1.join('');
    word2 = word2.join('');
    if (word1 === word2) {
        return true
    } else {
        return false
    }
};