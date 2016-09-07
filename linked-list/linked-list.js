var LinkedList = function() {     
     this.head = null;
     this.tail = null;
};

var Node = function(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
};


LinkedList.prototype.push = function(value) {
    var node = new Node(value);
    if(!this.head) { //brand new list
        this.head = node;
    } else if (!this.tail) { //only 1 item in list
        this.head.next = node;
        this.tail = node;
        this.tail.previous = this.head;
    } else { //at least 2 items in list
        var oldTail = this.tail;
        oldTail.next = node;
        this.tail = node;
        this.tail.previous = oldTail;
    }
};

LinkedList.prototype.pop = function() {
    if(this.tail) { //at least 2 items in list
        var answer = this.tail.value;
        var previousTail = this.tail.previous; //This doesn't cut off the node.next of the tail though...                
        this.tail = previousTail;              
    } else { //1 item in list
        var answer = this.head.value;
        this.head = null;
    }
    return answer;
};

LinkedList.prototype.shift = function() {
    var answer = this.head.value;
    if(this.tail) { //at least 2 items in list        
        this.head = this.head.next;
        if(!this.head.next) { //end of the line
            this.tail = null;
        }        
    } else { //1 item in list        
        this.head = null;
    }
    return answer;
};

LinkedList.prototype.unshift = function(value) {
    var node = new Node(value);
    if(!this.head) { //brand new list
        this.head = node;
    } else if(!this.tail) { //only 1 item in list
        var oldHead = this.head;
        node.next = oldHead;
        this.head = node;
        this.tail = oldHead;
    } else { //at least 2 items in list;
        var oldHead = this.head;
        node.next = oldHead;
        this.head = node;
    }    
};

LinkedList.prototype.count = function() {
    var items = 0;
    if(this.head) {         
        var currentNode = this.head;
        items++;
        while(currentNode.next) {
            items++;
            currentNode = currentNode.next;
        }        
    }   
    return items;
};

LinkedList.prototype.delete = function(value) {
    var running = true;
    var currentNode = this.head;
    while(running) {
        if(currentNode.value == value) {
            if(currentNode.previous) { //deleting at least the second node;
                var previousNode = currentNode.previous
                previousNode.next = currentNode.next;
                if(!previousNode.next) { //end of the line;
                    this.tail = previousNode;
                }
            } else { //deleting first node;
                if(currentNode.next) {
                    this.head = currentNode.next;
                } else {
                    this.head = null;
                }
            }            
            running = false;
        } else {
            currentNode = currentNode.next;
        }     
    }

    return currentNode;
}

module.exports = LinkedList;