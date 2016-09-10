var Palindromes = function(factorObject) {
    this.minFactor = factorObject.minFactor || 1;
    this.maxFactor = factorObject.maxFactor;
};

Palindromes.prototype.generate = function() {

};

Palindromes.prototype.largest = function() {
    var value = 0;   
    var factors = [];
    for(var i = this.minFactor; i < this.maxFactor; i++) {
        for(var j = i; j <= this.maxFactor; j++) {            
            if (i * j > value && isPalindrome(i * j)) { //lazy way to get all possible factors of largest value
                value = i * j;                
            }            
        }
    }    
    for(var i = this.minFactor; i < this.maxFactor; i++) {
        for(var j = i; j <= this.maxFactor; j++) { //how to not repeat this nested for-loop?            
            if(i * j == value) {
                var set = [i,j];
                factors.push(set);
            }            
        }
    }
    return {
        value: value,
        factors: factors    
    };
};

Palindromes.prototype.smallest = function() { //i can abstract largest/smallest to a common function. can.
    var value = Math.pow(this.maxFactor,2);   
    var factors = [];
    for(var i = this.minFactor; i < this.maxFactor; i++) {
        for(var j = i; j <= this.maxFactor; j++) {            
            if (i * j < value && isPalindrome(i * j)) { //lazy way to get all possible factors of largest value
                value = i * j;                
            }            
        }
    }    
    for(var i = this.minFactor; i < this.maxFactor; i++) {
        for(var j = i; j <= this.maxFactor; j++) { //how to not repeat this nested for-loop?            
            if(i * j == value) {
                var set = [i,j];
                factors.push(set);
            }            
        }
    }
    return {
        value: value,
        factors: factors    
    };
};

var isPalindrome = function(number) {
    var digits = number.toString().split('');
    while(digits.length > 1) {
        if(digits.shift() != digits.pop()) {
            return false;
        }
    }
    return true;
};

module.exports = Palindromes;