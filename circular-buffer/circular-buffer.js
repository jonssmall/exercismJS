var CBuffer = {};

var circularBuffer = function(size) {
	this.structure = [];
	this.oldestPosition = 0;

	return {
		size: size,
		write: function(input) {
			if(input) {
				if(structure.length < size) {
					structure.push(input);				
				} else {
					throw bufferFullException();
				}
			}			
		},
		forceWrite: function(input) {
			if(input) {
				if(structure.length < size) {
					structure.push(input);				
				} else {
					structure.shift();
					structure.push(input);
				}
			}
			console.log(structure);
		},
		read: function() {
			if (structure.length > 0) {
				return structure.shift();
			} else {
				throw bufferEmptyException();
			}			
		},
		clear: function() {
			structure = [];
		}
	}	
};

var checkEmpty = function(buffer) {

}

var bufferFullException = function() {
	return new Error("Buffer Full");
};

var bufferEmptyException = function() {
	return new Error("Buffer Empty");
};

CBuffer.circularBuffer = circularBuffer;
CBuffer.bufferFullException = bufferFullException;
CBuffer.bufferEmptyException = bufferEmptyException;

module.exports = CBuffer;