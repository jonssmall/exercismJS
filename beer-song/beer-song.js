var BeerSong = function() {
	
};

BeerSong.prototype.sing = function(start, end) {
	var end = end || 0; 
	var output = "";
	for (var i = start; i >= end; i--) {
		output += this.verse(i) + "\n";
	}	
	return output.trim() + "\n"; // handling the terminal verse's extra newline. could replace this with condtional in for loop..
};

BeerSong.prototype.verse = function(position) { // how to tighten this mess up
	if (position  > 2) {
		var output = position.toString() + " bottles of beer on the wall, " 
					+ position.toString() + " bottles of beer.\nTake one down and pass it around, "
					+ (position - 1).toString() + " bottles of beer on the wall.\n"
	} else if (position == 2) {
		var output = position.toString() + " bottles of beer on the wall, " 
					+ position.toString() + " bottles of beer.\nTake one down and pass it around, "
					+ (position - 1).toString() + " bottle of beer on the wall.\n"
	} else if (position == 1) {
		var output = position.toString() + " bottle of beer on the wall, " 
					+ position.toString() + " bottle of beer.\nTake it down and pass it around, "
					+ "no more bottles of beer on the wall.\n"
	} else {
		var output = "No more bottles of beer on the wall, " 
					+ "no more bottles of beer.\nGo to the store and buy some more, "
					+ "99 bottles of beer on the wall.\n"
	}
	
	return output;
};

module.exports = BeerSong;
