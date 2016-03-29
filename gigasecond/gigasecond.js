var Gigasecond = function(startDate) {
	this.startDate = startDate
};

Gigasecond.prototype.date = function(input) {
	return new Date(this.startDate.getTime() + 1000000000000); // 10*9 seconds converted to ms
};

module.exports = Gigasecond;
