var Allergies = function(score) {
    this.score = score % 256; //Scrub any excess points over 255
    this.types = {
        "cats": 128,
        "pollen": 64,
        "chocolate": 32,
        "tomatoes": 16,
        "strawberries": 8,
        "shellfish": 4,
        "peanuts": 2,
        "eggs": 1,
    };
    this.myAllergies = [];
    for(var type in this.types) {
        var allergyValue = this.types[type];        
        if(this.score >= allergyValue) {            
            this.score -= allergyValue;
            this.myAllergies.unshift(type);
        }     
    }
};


Allergies.prototype.list = function() {        
    return this.myAllergies;
};

Allergies.prototype.allergicTo = function(type) {    
    return this.myAllergies.indexOf(type) >= 0 ? true : false;
}

module.exports = Allergies;