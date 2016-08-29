var CBuffer = {};

var circularBuffer = function(size) {
	return {
		size: size,
		read: function() {
			throw bufferEmptyException();
		}
	}	
};

var bufferFullException = function() {
	
};

var bufferEmptyException = function() {
	return new Error("Buffer Empty");
};

CBuffer.circularBuffer = circularBuffer;
CBuffer.bufferFullException = bufferFullException;
CBuffer.bufferEmptyException = bufferEmptyException;

module.exports = CBuffer;