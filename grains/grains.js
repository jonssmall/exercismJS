//1,2,4,8,16 = 2^(n-1)
var bigInt = require("./big-integer");

var Grains = function() {

};

Grains.prototype.square = function(square) {
	return bigInt(2).pow(square - 1).toString();
};

Grains.prototype.total = function() {
	var total = 0;
	for (var i = 1; i < 65; i++) {
		total = bigInt(total).add(this.square(i)); //The right combination of throwing bigInt at this line worked.
												   //But I don't know why the left side of the assignment stays Big.
	}
	return total.toString();
};

module.exports = Grains;