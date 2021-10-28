var checkIfPangram = function(sentence) {
    let charMap = {};
      for(let char of sentence){
    if(charMap[char]){
        charMap[char]++;
    }else{
        charMap[char] = 1
    }
      }
    if(Object.keys(charMap).length　=== 26){
       return true
    }else{
        return false
    }
        
};