var Robot = function() {
    this.bearing = "";
    this.coordinates = [];
};

Robot.prototype.orient = function(direction) {
    var validDirections = ["north", "east", "south", "west"];
    if(validDirections.indexOf(direction) >= 0) {
        this.bearing = direction;
    } else {
        throw "Invalid Robot Bearing";
    }    
};

Robot.prototype.turnRight = function() {
    this.bearing = compass[this.bearing].right; 
};

Robot.prototype.turnLeft = function() {
    this.bearing = compass[this.bearing].left; 
};

Robot.prototype.at = function(x, y) {
    this.coordinates = [];
    this.coordinates.push(x);
    this.coordinates.push(y);
};

Robot.prototype.advance = function() {
    if(this.bearing == "north") {
        this.coordinates[1] += 1;
    } else if(this.bearing == "east") {
        this.coordinates[0] += 1;
    } else if(this.bearing == "south") {
        this.coordinates[1] -= 1;
    } else { //"west"
        this.coordinates[0] -= 1;
    }
};

Robot.prototype.instructions = function(commands) {
    var instructionList = [];
    for(var i = 0; i < commands.length; i++) {
        var command = commands[i];
        instructionList.push(commandLookup[command]);
    }
    return instructionList;
};

Robot.prototype.place = function(initObject) {    
    this.at(initObject.x, initObject.y);
    this.orient(initObject.direction);    
};

Robot.prototype.evaluate = function(commands) {
    var rootScope = this;               
    var instructions = this.instructions(commands);    
    instructions.map(function(e) {        
        if(e == "turnLeft") {
            rootScope.turnLeft();
        } else if(e == "turnRight") {
            rootScope.turnRight();
        } else { //"advance"
            rootScope.advance();
        }
    });    
};

var commandLookup = {
    "L": "turnLeft",
    "R": "turnRight",
    "A": "advance"
};

var compass = {
    "north": {
        left: "west",
        right: "east"        
    },
    "east": {
        left: "north",
        right: "south"
    },
    "south": {
        left: "east",
        right: "west"
    },
    "west": {
        left: "south",
        right: "north"
    }
};

module.exports = Robot;