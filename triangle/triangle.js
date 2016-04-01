var Triangle = function(a,b,c) {
	this.sideA = a;
	this.sideB = b;
	this.sideC = c;
};

//inequality theorem: sum of 2 sides greater than third
Triangle.prototype.violatesTheorem = function() { 
	if (this.sideA + this.sideB <= this.sideC || //How to tighten this up?
		this.sideA + this.sideC <= this.sideB || 
		this.sideB + this.sideC <= this.sideA) {
			return true; 
	} else {
		return false;
	}
}

Triangle.prototype.illegalSides = function() {
	if (this.sideA <= 0 || this.sideB <= 0 || this.sideC <= 0) {
		return true;
	} else {
		return false;
	}
}

Triangle.prototype.kind = function() {	//Should I be throwing an error as part of a try/catch block?
	if (this.illegalSides() || this.violatesTheorem()) throw "Illegal";		
	if (this.sideA == this.sideB && this.sideA == this.sideC) {
		return "equilateral";
	} else if (this.sideA == this.sideB || this.sideA == this.sideC || this.sideB == this.sideC) {
		return "isosceles"
	} else {
		return "scalene";
	}	
};

module.exports = Triangle;