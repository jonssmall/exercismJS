var primeFactors = require('../prime-factors/prime-factors');

var Raindrops = function(){
    
};

Raindrops.prototype.convert = function(inputNumber) {
    var answer ="";
    var primes = primeFactors.for(inputNumber);

    if(primes.indexOf(3) >= 0) {
        answer += "Pling";
    }

    if(primes.indexOf(5) >= 0) {
        answer += "Plang";
    }

    if(primes.indexOf(7) >= 0) {
        answer += "Plong";
    }

    if(answer) {
        return answer;
    } else {
        return inputNumber.toString();
    }    
};


module.exports = Raindrops;
