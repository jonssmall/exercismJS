var CustomSet = function(arr) {
    this.arr = [];
    if(arr) {
        for(var i = 0; i < arr.length; i++) {
            var element = arr[i];
            this.add(element);
        }
    }
};

CustomSet.prototype.empty = function() {
    return this.arr.length > 0 ? false : true;
};

CustomSet.prototype.contains = function(number) {
    if(!this.empty() && this.arr.indexOf(number) > -1) {
        return true;
    } else {
        return false;
    }
};

CustomSet.prototype.subset = function(otherSet) {    
    if(!otherSet.empty()) {        
        for(var i = 0; i < otherSet.arr.length; i++) {            
            var otherSetElement = otherSet.arr[i];            
            if(this.empty() || this.arr.indexOf(otherSetElement) == -1) {
                return false;
            }
        }
    }    
    return true;
};

CustomSet.prototype.disjoint = function(otherSet){ 
    if(otherSet.empty() || this.empty()) {
        return true;
    }
    for(var i = 0; i < otherSet.arr.length; i++) {            
        var otherSetElement = otherSet.arr[i];            
        if(this.arr.indexOf(otherSetElement) > -1) {
            return false;
        }
    }
    return true;
};

CustomSet.prototype.eql = function(otherSet) {
    if(this.empty() && otherSet.empty()) {
        return true;
    } else if (this.empty() != otherSet.empty()) {
        return false;
    } else {
        return this.subset(otherSet);
    }
};

CustomSet.prototype.add = function(number) {    
    if(this.empty()) {
        this.arr = [number];        
    } else if(this.arr.indexOf(number) == -1) {
        this.arr.push(number);
    }    
    return this;
};

CustomSet.prototype.intersection = function(otherSet) {
    var interSet = [];
    for(var i = 0; i < otherSet.arr.length; i++) {
        if(this.arr.indexOf(otherSet.arr[i]) != -1) {
            interSet.push(otherSet.arr[i]);
        }
    }    
    return new CustomSet(interSet);
};

CustomSet.prototype.difference = function(otherSet) {
    var diffSet = [];
    //if this arr element is not in otherset, push to diffSet
    for(var i = 0; i < this.arr.length; i++) {
        if(otherSet.arr.indexOf(this.arr[i]) == -1) {
            diffSet.push(this.arr[i]);
        }
    }
    return new CustomSet(diffSet);
};

CustomSet.prototype.union = function(otherSet) {
    var unionSet = this.arr.concat(otherSet.arr);
    unionSet = unionSet.filter (function (value, index, array) { 
        return array.indexOf (value) == index;
    });
    return new CustomSet(unionSet);
};

CustomSet.prototype.delete = function(number) {
    if(this.arr.indexOf(number) != -1) {
        this.arr.splice(this.arr.indexOf(number), 1);
    }
    return this;
};

CustomSet.prototype.clear = function() {
    this.arr = [];
    return this;
};

CustomSet.prototype.size = function() {
    return this.arr.length;
};

CustomSet.prototype.toList = function() {
    return this.arr;
};

module.exports = CustomSet;