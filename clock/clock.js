var Clock = function(hours, minutes) {		
	this.time = pad(hours) + ":" + (minutes ? pad(minutes) : "00");
};

Clock.prototype.toString = function() { //Am I really overwriting toString. It's 2016 people.
	return this.time;
};

Clock.prototype.plus = function(extraMinutes) {
	var hours = this.time.split(":")[0];   //Lyrics to some song about breaking my heart 
	var minutes = this.time.split(":")[1]; //and stitching it back together go here.

	minutes = parseInt(minutes) + parseInt(extraMinutes);
	while (minutes >= 60) { //loops if you add more than 60 minutes at a time.
		hours++;
		minutes %= 60;
	}	
	if (hours >= 24) {
		hours %= 24;
	}
	this.time = pad(hours) + ":" + pad(minutes);
	return this //This isn't the most roundabout way to set object properties, but it's close.
};

Clock.prototype.minus = function(fewerMinutes) {
	var hours = this.time.split(":")[0];   //Lyrics to some song about breaking my heart 
	var minutes = this.time.split(":")[1]; //and stitching it back together go here.

	minutes = parseInt(minutes) - parseInt(fewerMinutes);
	while (minutes < 0) { 		
		hours--;		
		minutes = 60 + minutes; //plus a negative
	}	
	if (hours < 0) {
		hours = 24 + hours;
	}
	this.time = pad(hours) + ":" + pad(minutes);
	return this //This isn't the most roundabout way to set object properties, but it's close.
};

Clock.prototype.equals = function(otherClock) {
	return this.toString() == otherClock.toString();
}

var pad = function(time) {
	return time < 10 ? "0" + time : time;
}

var At = function(hours, minutes) {
	return new Clock(hours, minutes);
};

module.exports = {
	at: At
};