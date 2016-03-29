//var nameList = {};
var nameList = [];

var createName = function() {
	var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var result = ""
	for (var i = 0; i < 2; i++) {
		result += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
	}
	result += (100 + Math.floor(Math.random() * 900)).toString();
	
	return result;		
}


var Robot = function() { // A-Z{2} \d {3}
	this.name = this.uniqueName();	
};

Robot.prototype.uniqueName = function() {
	var self = this;
	var pending = createName();

	var dupeFlag = true;

	while (dupeFlag) { // TINY RIIIIIIICK
		if(nameList.indexOf(pending) == -1) {
			dupeFlag = false;
			nameList.push(pending);		
			return pending;
		} else {
			pending = createName();			
		}
	}		
};

module.exports = Robot;
