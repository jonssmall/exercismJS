var Crypto = function(phrase) {
    this.phrase = phrase;
    this.rows;
    this.columns;
};

Crypto.prototype.normalizePlaintext = function() {
    var sanitizer = /[^a-zA-Z0-9]/gi;    
    return this.phrase.toLowerCase().replace(sanitizer, ''); 
}

Crypto.prototype.size = function() {
    var length = this.normalizePlaintext(this.phrase).length;
    var root = Math.sqrt(length);
    if (root === parseInt(root, 10)) { //If sqrt is an integer, perfect square c = r
        this.rows = root;
        this.columns = root;
    } else {
        this.rows = Math.ceil(root);
        this.columns = this.rows - 1;
    }
    return this.rows;
};

Crypto.prototype.plaintextSegments = function() {
    var segments = [];
    var normalized = this.normalizePlaintext(this.phrase);
    var rowLength = this.size();
    while(normalized) {
        segments.push(normalized.slice(0, rowLength));
        normalized = normalized.substring(rowLength);
    }

    return segments;
};

Crypto.prototype.ciphertext = function() {
    var answer = "";    
    var segments = this.plaintextSegments();    

    for(var i = 0; i <= this.columns; i++) { //why do I feel like I got column size wrong.
        for(var j = 0; j < segments.length; j++) {
            var segment = segments[j];
            var letter = segment[i];            
            if (letter) {
                answer += letter;
            }
        }
    }
    

    return answer;
};

module.exports = Crypto;        