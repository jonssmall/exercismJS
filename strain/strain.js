var strain = {};

strain.keep = function(collection, predicate) {
    var output = [];
    for(var i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
            output.push(collection[i]);
        }
    }
    return output;
};

strain.discard = function(collection, predicate) {
    var output = [];
    for(var i = 0; i < collection.length; i++) {
        if (!predicate(collection[i])) {
            output.push(collection[i]);
        }
    }
    return output;
};

module.exports = strain;