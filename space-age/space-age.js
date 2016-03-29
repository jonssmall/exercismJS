   // - Earth: orbital period 365.25 Earth days, or 31557600 seconds
   // - Mercury: orbital period 0.2408467 Earth years
   // - Venus: orbital period 0.61519726 Earth years
   // - Mars: orbital period 1.8808158 Earth years
   // - Jupiter: orbital period 11.862615 Earth years
   // - Saturn: orbital period 29.447498 Earth years
   // - Uranus: orbital period 84.016846 Earth years
   // - Neptune: orbital period 164.79132 Earth years

var earthYearInSeconds = 31557600;
var orbits = {
	"Earth": 1,
	"Mercury": 0.2408467,
	"Venus": 0.61519726,
	"Mars": 1.8808158,
	"Jupiter": 11.862615,
	"Saturn": 29.447498,
	"Uranus": 84.016846,
	"Neptune": 164.79132
};

var SpaceAge = function(seconds) {
	this.seconds = seconds;
	this.earthAge = seconds / earthYearInSeconds
};

SpaceAge.prototype.planetAge = function(planet) {
	console.log(this.earthAge);
	return Math.round(this.earthAge / orbits[planet] * 100) / 100;
};

SpaceAge.prototype.onEarth = function() {
	return this.planetAge("Earth");
};

SpaceAge.prototype.onMercury = function() {
	return this.planetAge("Mercury");
};

SpaceAge.prototype.onVenus = function() {
	return this.planetAge("Venus");
};

SpaceAge.prototype.onMars = function() {
	return this.planetAge("Mars");
};

SpaceAge.prototype.onJupiter = function() {
	return this.planetAge("Jupiter");
};

SpaceAge.prototype.onSaturn = function() {
	return this.planetAge("Saturn");
};

SpaceAge.prototype.onUranus = function() {
	return this.planetAge("Uranus");
};

SpaceAge.prototype.onNeptune = function() {
	return this.planetAge("Neptune");
};

module.exports = SpaceAge;