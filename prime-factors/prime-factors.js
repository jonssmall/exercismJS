var primeFactors = {};

primeFactors.factorContainer = [];
primeFactors.divisor = 2;

primeFactors.for = function(number) {    

    if(number == 1) {
        var answer = this.factorContainer
        this.factorContainer = [];
        this.divisor = 2;
        return answer;
    }
    while (number % this.divisor != 0) {
        this.divisor++;
    }
    this.factorContainer.push(this.divisor);
    return this.for(number / this.divisor);


};

module.exports = primeFactors;
