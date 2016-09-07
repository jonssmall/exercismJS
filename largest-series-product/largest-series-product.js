var Series = function(numStr) {
    this.numStr = numStr;
};

var multiplyDigits = function(digitString) {
    return digitString.split('').reduce(function(a,b) {
        return parseInt(a) * parseInt(b);
    }, 1);
};

var noZeroes = function(digitString) {
    return digitString.indexOf('0') < 0;
};

Series.prototype.largestProduct = function(number) {
    if(this.numStr.match(/[a-z]/i) || number < 0) {
        throw new Error("Invalid input.");
    }
    if(this.numStr.length < number) {
        throw new Error("Slice size is too big.");
    }

    var winningProduct = 0;
    for(var i = 0; i <= this.numStr.length - number; i++) {
        var candidateDigits = this.numStr.substring(i, i + number);
        var candidate = multiplyDigits(candidateDigits);
        if(candidate > winningProduct) {
            winningProduct = candidate;
        } 
    }    
    return winningProduct;
};

module.exports = Series;