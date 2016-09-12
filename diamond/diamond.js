var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var Diamond = function() {

};

Diamond.prototype.makeDiamond = function(letter) {
    var diamond = [];
    var stopIndex = alphabet.indexOf(letter); // E = 4;    
    var maxWidth = stopIndex * 2 + 1 //9;  
    for(var i = 0; i <= stopIndex; i++) {        
        var currentLetter = alphabet[i];        
        var outerDotCount = stopIndex - i; //4 - 4        
        var currentRow = buildEmptyRow(maxWidth);        
        currentRow[outerDotCount] = currentLetter;
        currentRow = currentRow.reverse();
        currentRow[outerDotCount] = currentLetter;
        diamond.push(currentRow.join(''));
    }
    for(var i = stopIndex - 1; i >= 0; i--) {    //too lazy to DRY    
        var currentLetter = alphabet[i];        
        var outerDotCount = stopIndex - i; //4 - 4        
        var currentRow = buildEmptyRow(maxWidth);        
        currentRow[outerDotCount] = currentLetter;
        currentRow = currentRow.reverse();
        currentRow[outerDotCount] = currentLetter;        
        diamond.push(currentRow.join(''));
    }
    return diamond.join("\n") + "\n";
};

var buildRows = function(stopIndex, maxWidth) {

};

var buildEmptyRow = function(width) {
    var row = []
    for(var i = 0; i < width; i++) {
        row.push(" ");
    }
    return row;
};

module.exports = Diamond;