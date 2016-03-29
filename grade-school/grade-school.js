var School = function() {
	this.studentRoster = {};
};

School.prototype.roster = function() {
	for (var key in this.studentRoster) {
		this.studentRoster[key] = this.studentRoster[key].sort(); //lazy, how else
	}
	return this.studentRoster;
};

School.prototype.add = function(name, grade) {
	if (!this.studentRoster[grade]) {
		this.studentRoster[grade] = [];
	}
    this.studentRoster[grade].push(name);
};

School.prototype.grade = function(grade) {
	var result = this.studentRoster[grade] || [];
    return result.sort(); //why am I sorting an empty array just to be slick come on world 
};

module.exports = School;
