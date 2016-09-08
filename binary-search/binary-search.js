var BinarySearch = function(arr) {
    this.arr = arr;
    this.sorted = arr.slice(0).sort(function(a,b) { //slice gets a copy
        return a - b;
    }); 
    
    var returnObject = {
        array: this.arr.toString() == this.sorted.toString() ? this.arr : undefined,
        indexOf: function(value, subArr) {
            var currentArr = subArr || arr;
            var midpoint = Math.floor(currentArr.length - 1 / 2);
            if(currentArr[midpoint] == value) {
                return midpoint;
            } else if (currentArr.length == 0) { 
                return -1;
            } else if (currentArr[midpoint] > value) {
                var segment = currentArr.slice(0, midpoint);                
                return this.indexOf(value, segment);
            } else {
                var segment = currentArr.slice(midpoint + 1, currentArr.length);
                console.log(segment);                
                return this.indexOf(value, segment);
            }
        },
    };    
    return returnObject;
};

module.exports = BinarySearch;