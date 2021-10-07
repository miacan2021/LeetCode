var maximumWealth = function(accounts) {
    let sort = [];
    for(let i of accounts) {
    const count = i.reduce((a, b) => a + b, 0);
    sort.push(count);
  }
    sort.sort(function(a,b) {
        return a-b;
    });
    return sort.pop();
};