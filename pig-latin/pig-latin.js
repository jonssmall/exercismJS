var pigLatin = {};

var vowels = /[aeiou]/;

pigLatin.translate = function(phrase) {
    var words = phrase.split(" ");

    for(var i = 0; i < words.length; i++) {
        var currentWord = words[i];                
        if(vowels.test(currentWord[0])) {
            words[i] = currentWord.concat("ay");
        } else {
            var splitPoint = currentWord.search(vowels);
            if (currentWord[splitPoint] == "u" && currentWord[splitPoint - 1] == "q") splitPoint++;
            var appender = currentWord.slice(0, splitPoint);
            words[i] = currentWord.substring(splitPoint) + appender + "ay";
        }
    }

    return words.join(" ");

};

module.exports = pigLatin;