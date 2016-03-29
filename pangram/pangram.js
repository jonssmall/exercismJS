var Pangram = function(input) {
	this.input = input;
};

Pangram.prototype.isPangram = function() { // "some random example string"
	if (this.input.length > 0) {
		var letters = this.input.replace(/[^A-Za-z]/g, '').toLowerCase().split('');
		var uniq = letters.reduce(function(a,b){
		    if (a.indexOf(b) < 0 ) a.push(b);
		    return a;
		},[]);
		return uniq.sort().join('') == "abcdefghijklmnopqrstuvwxyz";
	} else {
		return false;
	}
	
};

module.exports = Pangram;
