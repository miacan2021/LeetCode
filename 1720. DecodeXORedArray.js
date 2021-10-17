var decode = function(encoded, first) {
    const arr = [first];
    encoded.forEach((en,i) => {
        arr.push(arr[i] ^ en);

    });
    return arr;
};