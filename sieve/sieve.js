var Sieve = function(number) {
    this.number = number;
    this.primes = [];
    this.populatePrimes();
    this.filterPrimes();  
};

Sieve.prototype.populatePrimes = function() {
    for(var i = 2; i <= this.number; i++) {
        this.primes.push(i);
    }
};

Sieve.prototype.filterPrimes = function() {
    for(var i = 0; i < this.primes.length; i++) {
        var currentNumber = this.primes[i];
        for(var j = i + 1; j < this.primes.length; j++) {
            var element = this.primes[j];
            if(element % currentNumber == 0) {
                this.primes.splice(this.primes.indexOf(element),1);
            }
        }
    }
};

module.exports = Sieve;