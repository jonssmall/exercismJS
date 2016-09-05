var Cipher = function(key) {
    if(keyPattern.test(key)) {
        this.key = key || "aaaaaaaaaa";
    } else {
        throw new Error("Bad key");
    }   
};
var keyPattern = /[a-z]+/;
var alphabet = "abcdefghijklmnopqrstuvwxyz";

Cipher.prototype.encode = function(word) {
    var encoded = "";

    for(var i = 0; i < word.length; i++) {
        var currentPosition = alphabet.indexOf(word[i]);
        var shiftAmount = alphabet.indexOf(this.key[i]);
        var newLetter = alphabet[(currentPosition + shiftAmount) % alphabet.length]; //possibly off by one
        encoded += newLetter;
    }

    return encoded;
};

Cipher.prototype.decode = function(word) {
    var decoded = "";

    for(var i = 0; i < word.length; i++) {
        var currentPosition = alphabet.indexOf(word[i]);
        var shiftAmount = alphabet.indexOf(this.key[i]);
        var newLetter = alphabet[(currentPosition - shiftAmount) % alphabet.length]; //possibly off by one
        decoded += newLetter;
    }

    return decoded;
};

module.exports = Cipher;