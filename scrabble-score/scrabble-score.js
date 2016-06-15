var Scoring = function() {
	this.lookup = {};
};

Scoring.prototype.populateLookup = function(letters, value) {
	var rootscope = this;
	letters.map(function(letter) {
		rootscope.lookup[letter] = value;
	});
}; 

var scoring = new Scoring();
scoring.populateLookup(["A","E","I","O","U","L","N","R","S","T"], 1);
scoring.populateLookup(["D","G"], 2);
scoring.populateLookup(["B","C","M","P"], 3);
scoring.populateLookup(["F","H","V","W","Y"], 4);
scoring.populateLookup(["K"], 5);
scoring.populateLookup(["J","X"], 8);
scoring.populateLookup(["Q","Z"], 10);

var score = function(word) {
	var result = 0;
	if (!word) return result;	
	for (var i = 0; i < word.length; i++) {
		var letter = word.toUpperCase()[i];		
		result += scoring.lookup[letter];
	}
	return result;
};

module.exports = score;

// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10