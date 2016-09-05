var Octal = function(numStr) {
    this.octalNum = numStr;
};

Octal.prototype.toDecimal = function() {
    if(this.octalNum.indexOf('8') >= 0) {
        return 0;
    }    
    answer = 0;
    for(var i = 0; i < this.octalNum.length; i++) {
        var currentInt = parseInt(this.octalNum[i]);
        answer += currentInt * Math.pow(8, this.octalNum.length - 1 - i);
    }

    return answer ? answer : 0;
};

module.exports = Octal;