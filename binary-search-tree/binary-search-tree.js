var Bst = function(number) {
    this.root = new Node(number);
    return this.root;
};

var Node = function(value) {
    this.data = value;
    this.left = null;
    this.right = null;
        
};

Node.prototype.each = function(callback) {
    var notYetCalled = true; //Is there a tighter way to prevent dupes.
    if(this.left) {
        this.left.each(callback);
        callback(this.data);
        notYetCalled = false;
    }
    if(this.right) {
        if(notYetCalled) callback(this.data);
        this.right.each(callback);
    }
    if(!this.right && !this.left) {
        callback(this.data);
    }    
};    

Node.prototype.insert = function(value) {
    var candidate = new Node(value);
    if(value <= this.data) {
        if(this.left) {
            this.left.insert(value);
        } else {
            this.left = candidate;
        }
    } else {
        if(this.right) {
            this.right.insert(value);
        } else {
            this.right = candidate;
        }
    }
};


module.exports = Bst;