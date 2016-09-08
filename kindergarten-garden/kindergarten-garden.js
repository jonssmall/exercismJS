var Garden = function(cups, kids) {
    this.cups = cups;
    this.rows = cups.split('\n');
    this.kids = kids ? kids.sort() : ["alice","bob","charlie","david","eve","fred",
        "ginny","harriet","ileana","joseph","kincaid","larry"];

    this.retrievePlants = function(rowMin, rowMax) {
        if(!this.rows[0][rowMin]) { //bail on students that don't exist.
            return null;
        }

        var plants = [];

        this.rows.map(function(row) {
            plants.push(row[rowMin])
            plants.push(row[rowMax])
        });                       
        
        console.log(plants);

        plants.forEach(function(e, i, arr) {
            arr[i] = plantLookup[e.toLowerCase()];
        });

        return plants;
    };

    var exposedObject = {};
    
    for(var i = 0; i < this.kids.length; i++) {
        var kid = this.kids[i].toLowerCase(); //too lazy to map lowercase at assignment of property
        var min = i * 2;
        var max = min + 1;
        exposedObject[kid] = this.retrievePlants(min, max);
    }
    
    return exposedObject;
};

var plantLookup = {
    "g" : "grass",
    "c" : "clover",
    "r" : "radishes",
    "v" : "violets"
};

module.exports = Garden;