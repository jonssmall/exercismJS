var Words = function() {
	
};

Words.prototype.count = function(input) { // "some randome example string"
	var words = input.trim().split(/\s+/); // splits it by any white space including coded tabs \t and newlines \n
	var result = Object.create(null);
	for (var i = 0; i < words.length; i++) {
		if(words[i] in result) {
			result[words[i]]++;
		} else {
			result[words[i]] = 1;
		}
	}
	return result;
};

module.exports = Words;
