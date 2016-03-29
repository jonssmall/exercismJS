//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
	var response;
	if (input.trim().length > 0) {
		var lastChar = input[input.length - 1];
		if (input == input.toUpperCase() && /[a-z]/i.test(input)) { //Numbers don't count as shouting. Dat Regex tho.
			response = "Whoa, chill out!";
		} else if (lastChar == "?") {
			response = "Sure.";
		} else {
			response = "Whatever.";
		}
	} else {
		response = "Fine. Be that way!";
	}
	return response;
};

module.exports = Bob;
