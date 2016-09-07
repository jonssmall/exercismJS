var Flattener  = function() {
};

Flattener.prototype.flatten = function(arr) {
    var rootscope = this;
    return arr.reduce(function(flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? rootscope.flatten(toFlatten) : toFlatten);
    }, []).filter(function(e) {return e != null});
};

module.exports = Flattener;