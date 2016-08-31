var Binary = function(numStr) {
    this.binaryString = numStr;
};

Binary.prototype.toDecimal = function() {
	if(/^(0|1)+/.test(this.binaryString)) {
        return parseInt(this.binaryString, 2);
    } else {
        return 0;
    }
};

module.exports = Binary;
