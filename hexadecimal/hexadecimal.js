var Hexadecimal = function(numStr) {
    this.numStr = numStr;
};

var hexKey = {
    "a": 10,
    "b": 11,
    "c": 12,
    "d": 13,
    "e": 14,
    "f": 15
};

Hexadecimal.prototype.toDecimal = function() {
    var answer = 0;
    for (var i = 0; i < this.numStr.length; i++) {
        var currentDigit = this.numStr[i];
        console.log(currentDigit + "parsed: " + parseInt(currentDigit));
        if(parseInt(currentDigit) || currentDigit == '0') {
            answer += parseInt(currentDigit) * Math.pow(16, this.numStr.length - 1 - i);            
        } else {            
            answer += hexKey[currentDigit] * Math.pow(16, this.numStr.length - 1 - i);
        }
    }
    return answer ? answer : 0;
};


module.exports = Hexadecimal;