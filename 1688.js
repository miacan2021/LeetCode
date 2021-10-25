var numberOfMatches = function(n) {
    let team = 0;
  while(n !== 1){
   const matches = Math.floor(n / 2)
    team += matches
    n = n - matches
  }
    return team
};
