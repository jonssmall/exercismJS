var say = {
    inEnglish: function(number) {
        if(number < 0 || number >= 1000000000000) {
            throw new Error('Number must be between 0 and 999,999,999,999.');
        }
        if(number == 0) {
            return "zero";
        }     
        var englishNumber = "";
        var billions = Math.floor(number / 1000000000);
        if(billions > 0 ) {
            englishNumber += buildHundreds(billions) + " billion ";
        }
        var millions = Math.floor(number % 1000000000 / 1000000);
        if(millions > 0 ) {
            englishNumber += buildHundreds(millions) + " million ";
        }
        var thousands = Math.floor(number % 1000000 / 1000);
        if(thousands > 0 ) {
            console.log(thousands);
            englishNumber += buildHundreds(thousands) + " thousand ";
        }
        var hundredsToOnes = number % 1000;          
        englishNumber += buildHundreds(hundredsToOnes);
        return englishNumber.trim();
    }    
};

var buildHundreds = function(number) {
    var hundredString = "";       
    if(Math.floor(number / 100) > 0) {
        hundredString += lookup[parseInt(number.toString()[0])] + " hundred ";
    }
    var tensAndOnes = number % 100;       
    if(tensAndOnes <= 20 && tensAndOnes != 0) {
        hundredString += lookup[tensAndOnes];
    }else if(tensAndOnes > 20) {
        hundredString += lookup[parseInt(tensAndOnes.toString()[0]) * 10];
        hundredString += "-";
        hundredString += lookup[parseInt(tensAndOnes.toString()[1])];
    }
    return hundredString;
};

var lookup = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety"
};

module.exports = say;