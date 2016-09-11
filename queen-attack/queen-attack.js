//check horizontals, check verticals, check diagonals
//default [0,3] [7,3]
//var positioning = {white: [2,4], black: [2,4]};
var Queens = function(positionObj) {
    this.white = positionObj ? positionObj.white : [0,3];
    this.black = positionObj ? positionObj.black : [7,3];    
    if(this.samePosition(this.white, this.black)) {
        throw 'Queens cannot share the same space';
    }       
};

Queens.prototype.samePosition = function(whiteCoords, blackCoords) {
    return whiteCoords[0] == blackCoords[0] && whiteCoords[1] == blackCoords[1];        
}

// '_ _ _ _ _ _ _ _\n\
// _ _ _ _ _ _ _ _\n\
// _ _ _ _ W _ _ _\n\
// _ _ _ _ _ _ _ _\n\
// _ _ _ _ _ _ _ _\n\
// _ _ _ _ _ _ _ _\n\
// _ _ _ _ _ _ B _\n\
// _ _ _ _ _ _ _ _\n\
// '

Queens.prototype.toString = function() {
    var rows = [];
    for(var i = 0; i < 8; i++) {
        rows.push(['_','_','_','_','_','_','_','_']);
    }
    rows[this.white[0]][this.white[1]] = "W";
    rows[this.black[0]][this.black[1]] = "B";
    for(var i = 0; i < 8; i++) {
        rows[i] = rows[i].join(" ");
    }    
    return rows.join("\n") + "\n";
};

Queens.prototype.canAttack = function() {
    if(this.vertical() || this.horizontal() || this.diagonal()) {
        return true;
    } else {
        return false;
    }

};

Queens.prototype.vertical = function() {
    return this.white[0] == this.black[0];
};

Queens.prototype.horizontal = function() {
    return this.white[1] == this.black[1];
};

Queens.prototype.diagonal = function() {
    var whiteDiagonals = calculateDiagonals(this.white);       
    for(var i = 0; i < whiteDiagonals.length; i++) {
        var whiteCoords = whiteDiagonals[i];
        if (this.samePosition(whiteCoords, this.black)) {
            return true;
        }
    }
    return false;
};

var calculateDiagonals = function(positionArr) {
    var diagonals = [];
    //NW to SE
    var startNW = [];    
    if(positionArr[0] < positionArr[1]) {
        startNW = [0, positionArr[1] - positionArr[0]];        
    } else if(positionArr[1] < positionArr[0]) {
        startNW = [positionArr[0] - positionArr[1] ,0];
    } else { // equal
        startNW = [0,0];
    }    
    for(var i = Math.max.apply(Math, startNW); i < 8; i++) {
        diagonals.push(startNW.slice());
        startNW[0]++;
        startNW[1]++;        
    }
    var startSW = [];    
    if(positionArr[0] < positionArr[1]) {
        startSW = [positionArr[0] + positionArr[1],0];        
    } else if(positionArr[1] < positionArr[0]) {
        startSW = [positionArr[0] + positionArr[1] ,0];
    } else { // equal
        startSW = [7,0];
    }    
    for(var i = startSW[0]; i >= 0; i--) {
        diagonals.push(startSW.slice());
        startSW[0]--;
        startSW[1]++;        
    }    

    console.log(diagonals);
    return diagonals;
}

module.exports = Queens;