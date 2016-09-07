var Wordy = {};

var WordProblem = function(questionString) {
    this.questionString = questionString;
};

//var operators = ["plus", "minus", "multiplied", "divided"];
var numberMatch = /-?\d+/g;
var operatorMatch = /plus|minus|multiplied|divided/g;
var compute = function(a,b,operator) {
    if(operator == "plus") {
        return a + b;
    } else if(operator == "minus") {
        return a - b;
    } else if (operator == "multiplied") {
        return a * b;
    } else {
        return a / b;
    }
};

WordProblem.prototype.answer = function() {    
    var numbers = this.questionString.match(numberMatch);
    var operators = this.questionString.match(operatorMatch); 
    if(!numbers || !operators) {
        throw Wordy.ArgumentError();
    }
    var answer = parseInt(numbers[0]);
    for(var i = 1; i < numbers.length; i++) {
        var operator = operators[i - 1];
        answer = compute(answer, parseInt(numbers[i]), operator);
    }
    return answer;
};

Wordy.WordProblem = WordProblem;
Wordy.ArgumentError = function() {
    return new Error("Bad Argument");
};

module.exports = Wordy;