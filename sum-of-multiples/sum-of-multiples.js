var SumOfMultiples = function(arr) {
    this.arr = arr;
    var rootScope = this;
    return {
        to: function(number) {
            var sum = 0;
            for(var i = 2; i < number; i++) {
                if (i % rootScope.arr[0] == 0 || i % rootScope.arr[1] == 0 || i % rootScope.arr[2] == 0){                    
                    sum += i;
                } 
            }
            return sum;
        }
    }
};

module.exports = SumOfMultiples;