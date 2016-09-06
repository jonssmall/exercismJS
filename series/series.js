var Series = function(numStr) {
    this.digits = numStr.split('').map(function(t){return parseInt(t)});
};

Series.prototype.slices = function(size) {
    if(size > this.digits.length) throw new Error("Slice size is too big.");
    var output = [];

    for(var i = 0; i <= this.digits.length - size; i++) {
        output.push(this.digits.slice(i, i+size));
    }

    return output;
};

module.exports = Series;