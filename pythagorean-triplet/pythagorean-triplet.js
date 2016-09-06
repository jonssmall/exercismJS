var Triplet = function(a,b,c) {
    this.a = a;
    this.b = b;
    this.c = c;    
};

Triplet.prototype.sum = function() {
    return this.a + this.b + this.c;
};

Triplet.prototype.product = function() {
    return this.a * this.b * this.c;
};

//a**2 + b**2 = c**2
Triplet.prototype.isPythagorean = function() {
    return Math.pow(this.a, 2) + Math.pow(this.b, 2) == Math.pow(this.c, 2);
};

Triplet.where = function(filterObj) {
    var start = filterObj.minFactor || 1;
    var stop = filterObj.maxFactor;
    var output = [];

    for(var i = start; i <= stop; i++) {
        var a = i;
        for(var j = start; j <= stop; j++) {
            var b = j;
            for(var k = start; k <= stop; k++) {
                var c = k;
                var candidateTriangle = new Triplet(a,b,c);
                if(candidateTriangle.isPythagorean()) {
                    var tripletProducts = output.map(function(element) {
                        return element.product();
                    })
                    if(tripletProducts.indexOf(candidateTriangle.product()) == -1) {
                        output.push(candidateTriangle);
                    }
                }
            }
        }
    }
    if(filterObj.sum) {
        output = output.filter(function(e) {
            return e.sum() == filterObj.sum;
        });
    }

    return output;
};

module.exports = Triplet;