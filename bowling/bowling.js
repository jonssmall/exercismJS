var Bowling = function(rollsArr) {
    this.rolls = rollsArr;   
    this.frames = [];    
    this.populateFrames();    
};

Bowling.prototype.populateFrames = function() {
    var frame = 1;     
    while(frame <= 10){
        var ball1 = this.rolls.shift();
        var ball2 = ball1 == 10 ? 0 : this.rolls.shift();
        var frameObj = {
            ball1: ball1,
            ball2: ball2,
            nextFrameBall1: this.rolls[0],
            nextFrameBall2: this.rolls[1],
        }
        if(ball1 == 10) { // strike
            frameObj.total = ball1 + frameObj.nextFrameBall1 + frameObj.nextFrameBall2;
        } else if (ball1 + ball2 == 10) { //spare
            frameObj.total = ball1 + ball2 + frameObj.nextFrameBall1;
        } else { //open
            frameObj.total = frameObj.ball1 + frameObj.ball2;
        }
        this.frames.push(frameObj);
        frame++
    }
};

Bowling.prototype.score = function() {
    this.checkRules();    
    var total = 0;    
    for(var frame in this.frames) {   
        total += this.frames[frame]["total"];     
    }
    return total;
};

Bowling.prototype.checkRules = function() {
    for(var i = 0; i < this.frames.length; i++) {
        var frame = this.frames[i];        
        if(frame.ball1 < 0 || frame.ball1 > 10 || frame.ball2 < 0 || frame.ball2 > 10) {
            throw new Error('Pins must have a value from 0 to 10');
        }
        if(frame.ball1 + frame.ball2 > 10) {
            throw new Error('Pin count exceeds pins on the lane');
        }
        if(frame.ball2 == undefined) {
            throw new Error('Score cannot be taken until the end of the game');
        }
    }    
    if(this.frames[9].ball1 + this.frames[9].ball2 != 10 && this.rolls.length > 0) {
        throw new Error('Should not be able to roll after game is over');
    }
    if(this.frames[9].ball1 == 10 && this.rolls.length  < 2 ) {
        throw new Error('Score cannot be taken until the end of the game');
    }
};

module.exports = Bowling;

