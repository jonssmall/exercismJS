var Hamming = function() {};

Hamming.prototype.compute = function(strand1, strand2) {
	var delta = 0;
	if (strand1.length == strand2.length) {
		for (i = 0; i < strand1.length; i++) {
			if(strand1[i] != strand2[i]) delta++
		}
		return delta;
	} else {
		throw new Error('DNA strands must be of equal length.');
	}
};

module.exports = Hamming;
