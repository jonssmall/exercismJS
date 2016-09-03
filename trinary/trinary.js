var Trinary = function(numStr) {
    this.numStr = numStr;
};

Trinary.prototype.toDecimal = function() {
    var answer = 0;

    for(var i = 0; i < this.numStr.length; i++) {
        var digit = parseInt(this.numStr[i]);
        if(digit) {
            answer += digit * Math.pow(3,this.numStr.length - 1 - i);
        }        
    }

    return answer;
};

module.exports = Trinary;