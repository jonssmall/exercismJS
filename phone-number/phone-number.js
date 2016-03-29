var PhoneNumber = function(fullNum) {
	this.fullNum = fullNum.match(/\d+/g).join('');
};

PhoneNumber.prototype.number = function() { //There must be more to life than this.
	if(this.fullNum.length == 11 && this.fullNum[0] == '1') {
		return this.fullNum.substring(1);
	} else if (this.fullNum.length == 10) {
		return this.fullNum;
	} else {
		return '0000000000';
	}
	
};

PhoneNumber.prototype.areaCode = function() {
	return this.fullNum.substring(0,3);
};

PhoneNumber.prototype.toString = function() { // '(123) 456-7890'
	return "(" + this.fullNum.substring(0,3) + ") " + this.fullNum.substring(3,6) + "-" + this.fullNum.substring(6);
};

module.exports = PhoneNumber;
