var Squares = function(num) {
    this.sum = (num * (num + 1)) / 2;
    this.squareOfSums = Math.pow(this.sum, 2);
    this.sumOfSquares = getSumOfSquares(num);    
    this.difference = this.squareOfSums - this.sumOfSquares;
};

var getSumOfSquares = function(num) {
    var answer = 0;
    for(var i = 1; i <= num; i++) {
        answer += Math.pow(i, 2);
    }
    return answer;
};

module.exports = Squares;