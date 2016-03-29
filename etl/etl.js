//old { 1: ['A', 'E', 'I', 'O', 'U'] };
//new { a: 1, e: 1, i: 1, o: 1, u: 1 };

var ETL = function() { 
	
};

ETL.prototype.transform = function(old) {
	var newScore = {};
	for (var key in old) { //"1"
		oldArray = old[key] //['A', 'E', 'I', 'O', 'U']
		for (var i = 0; i < oldArray.length; i++) {
			var letter = oldArray[i]; //"A"
			newScore[letter.toLowerCase()] = parseInt(key) // {a: 1}
		}
	}
	return newScore;
};

module.exports = ETL;
