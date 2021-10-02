var longestPalindrome = function(s) {
    let ans = 0;
    let keys = {};
    for (let c of s) {
        keys[c] ? keys[c]++ : keys[c] = 1;
        keys[c] % 2 == 0 ? ans += 2 : ans+=0;
    }
    return s.length > ans ? ans + 1 : ans;
  };