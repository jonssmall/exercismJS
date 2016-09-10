var prime = {
    nth: function(position) {
        if (position < 1) {
            throw new Error('Prime is not possible');
        }
        var primes = [];
        var number = 2;
        while(primes.length < position) {
            if(isPrime(number)) {
                primes.push(number);
            }
            number++;
        }
        return primes[position - 1]; //sloppy zero-index adjustment
    }
};

//prime number is greater than 1, only factors are 1 and itself;
var isPrime = function(number) {    
    for(var i = 2; i < number; i++) {
        if(number % i == 0) {
            return false;
        }
    }
    return true;
};

module.exports = prime;