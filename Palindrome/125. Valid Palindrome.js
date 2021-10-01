var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/gi,'')
    let reversed = s.toLowerCase().replace(/[^a-z0-9]/gi,'').split('').reverse().join('')
    if(s == reversed){
        return true
    }else{
        return false
    }
};