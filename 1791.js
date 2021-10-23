var findCenter = function(edges) {
    let num = 0;
    let maxChar = ''
    let map ={};
    for(let i=0; i < edges.length; i++){
        for(let j=0; j < edges[i].length; j++){
        if(map[edges[i][j]]){
            map[edges[i][j]]++;
        }else{
            map[edges[i][j]] = 1;
        }
}
       
       
    }
      for(let char in map){
        if(map[char] > num){
            num = map[char]
            maxChar = char 
        }
    }
    return maxChar;
    
};