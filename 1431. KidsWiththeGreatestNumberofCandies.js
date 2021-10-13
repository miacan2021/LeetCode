var kidsWithCandies = function(candies, extraCandies) {
    let result = [];
    for(let candy of candies){
        let sum = candy+extraCandies;
        let max = Math.max.apply(null, candies);
       result.push(max <= sum);
    }
    return result;
};