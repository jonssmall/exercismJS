var Luhn = function(number) {
    this.number = number;
    this.checkDigit = parseInt(this.number.toString().split('').pop());
    this.addends = generateAddends(this.number); 
    this.checksum = generateAddends(this.number).reduce(function(a, b){return a + b}, 0);
    this.valid = this.checksum % 10 ? false : true;        
};

Luhn.create = function(num) {
    for(var i = 0; i < 10; i++) {
        var num2 = parseInt(num.toString().concat(i.toString()));
        var candidate = new Luhn(num2);
        if(candidate.valid) {
            return num2;
        }
    }
    return num;
};

var generateAddends = function(num) {
    var digits = num.toString().split('').map(function(t){return parseInt(t)})

    for(var i = digits.length - 2; i >= 0; i -= 2) {
        var transformedNumber = digits[i] * 2
        if(transformedNumber >= 10) {
            transformedNumber -= 9;
        } 
        digits[i] = transformedNumber;
    }

    return digits;
};

module.exports = Luhn;