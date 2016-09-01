var atbash = {};

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var reverseAlphabet = alphabet.split("").reverse().join("");


atbash.encode = function(phrase) {
    var answer = "";
    var letterLength = 0;
    var sanitizer = /[\s.,]/gi

    phrase = phrase.toLowerCase().replace(sanitizer, '').split("");    

    for(var i = 0; i < phrase.length; i++) {
        var currentLetter = phrase[i];
        var position = alphabet.indexOf(currentLetter);
        var cipheredLetter = reverseAlphabet[position];        
        answer += cipheredLetter;
        
        letterLength++;
        if(letterLength % 5 == 0) {
            answer+= " ";
        }
    }    

    return answer.trim();
};


module.exports = atbash;