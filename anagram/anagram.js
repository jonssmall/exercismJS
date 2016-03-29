var Anagram = function(word) {
	this.word = word;
};

Anagram.prototype.matches = function(wordArray) { //["wordA", "wordB", "wordC"]
	var words = [];
	if(typeof arguments[0] == "string") { //mushing a string argument into an array, then proceeding as normal.
		for(var i = 0; i < arguments.length; i++) {
			words.push(arguments[i]);
		}
	} else {
		words = wordArray
	}

	var matches = [];

	var letters = this.word.toLowerCase().split('').sort(); // ["d", "o", "r", "w"]		
	
	for (var i = 0; i < words.length; i++) {
		var newWord = words[i];
		
		if(letters.join('') == newWord.toLowerCase().split('').sort().join('') && this.word.toLowerCase() != newWord.toLowerCase()) {
			matches.push(newWord);
		}
	}

	return matches;
};

module.exports = Anagram;
