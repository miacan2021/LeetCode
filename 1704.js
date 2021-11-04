var halvesAreAlike = function(s) {
    const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const mid = s.length / 2;
    const a = s.slice(0, mid).split('')
    const b = s.slice(mid, s.length).split('')
    let aVowel = 0;
    let bVowel = 0;
    for(let i =0; i < a.length; i++){
        if(vowel.includes(a[i])){
           aVowel++
        }
    }
      for(let i =0; i < b.length; i++){
        if(vowel.includes(b[i])){
            bVowel++
        }
    }
   return aVowel == bVowel

    };