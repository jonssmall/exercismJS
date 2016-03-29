var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(strand) {
	var nucleotides = strand.split("");
	var transformation = []
	for(var i = 0; i < nucleotides.length; i++) {
		var nucleotide = nucleotides[i];
		switch (nucleotide) {
			case "C":
				transformation.push("G");
				break;
			case "G":
				transformation.push("C");
				break;
			case "T":
				transformation.push("A");
				break;
			case "A":
				transformation.push("U");
				break;
		}
	}
	return transformation.join('');
};

module.exports = DnaTranscriber;
