var reverse = function(x) {
    const reverse = x.toString().split('').reverse().join('');
   const reversed =  Math.sign(x) * parseInt(reverse, 10);
   if(reversed > Math.pow(2, 31) - 1 || reversed < Math.pow(2, 31) * -1){
   return 0;
   }else{
   return reversed;
   } 
};