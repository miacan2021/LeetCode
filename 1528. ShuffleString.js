var restoreString = function(s, indices) {
    const print = [];
    for(let i = 0; i < s.length; i++) {
        print[indices[i]] = s[i];
    }
    return print.join("");
};