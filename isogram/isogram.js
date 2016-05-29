var Isogram = function(string) {
	this.string = string;
};

Isogram.prototype.isIsogram = function() {
	this.stripped = this.string.toLowerCase().replace(/\W/g, '');
	var counter = {}
	for (var i = 0; i < this.stripped.length; i++) {
		var letter = this.stripped[i];
		if(counter[letter]) { //already in object? destroy
			return false
			//counter[letter]++;
		} else {
			counter[letter] = 1;
		}
	}
	return true;
};

module.exports = Isogram;