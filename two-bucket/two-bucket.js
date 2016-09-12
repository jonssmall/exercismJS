var TwoBucket = function(buckOne,buckTwo,goal,starterBuck) {
    this.moveCount = 0;
    this.bucketOne = {
        "capacity": buckOne,
        "current": 0    
    };
    this.bucketTwo = {
        "capacity": buckTwo,
        "current": 0
    };
    this.goal = goal;
    this.starter = starterBuck == "one" ? this.bucketOne : this.bucketTwo;
    this.other = starterBuck == "one" ? this.bucketTwo : this.bucketOne;
    this.goalBucket;
    this.otherBucket;

    this.fillToGoal();
    
};
//this.goal != this.starter.current || this.goal != this.other.current || this.moves < 6
// 3,5,1 "one";
TwoBucket.prototype.fillToGoal = function() {       
    if(this.starter.capacity < this.other.capacity) {
        this.startSmaller();
    } else {
        this.startBigger();
    }

    if(this.goal == this.bucketOne.current) {        
        this.goalBucket = "one";
        this.otherBucket = this.other.current;
    } else {
        this.goalBucket = "two";
        this.otherBucket = this.other.current;
    }
};

//7,0
//0,7
//7,7
//3,11
//3,0
//0,3
//7,3
//0,10
//7,10
//6,11
//6,0
//0,6
//7,6
//2,11

//3,0
//0,3
//3,3
//1,5

//[this.starter.current, this.other.current].indexOf(this.goal) == -1

//7, 11, 2, one;
TwoBucket.prototype.startSmaller = function() {
    this.starter.current = this.starter.capacity;
    this.moveCount++; //fill        
    while([this.starter.current, this.other.current].indexOf(this.goal) == -1) { //is goal in array of current quantities?                
        if(this.other.current == this.other.capacity) {
            this.other.current = 0; //empty
            this.moveCount++;
        }
        var otherRemainingCapacity = this.other.capacity - this.other.current;         
        if(this.starter.current <= otherRemainingCapacity) { //completely empty starter
            this.other.current += this.starter.current;
            this.moveCount++;
            this.starter.current = 0;           
        } else { //completely fill other, partially empty starter
            this.other.current = this.other.capacity;
            this.starter.current -= otherRemainingCapacity;
            this.moveCount++;           
        }
        if(this.starter.current == 0) {
            //refill only if necessary;
            this.starter.current = this.starter.capacity;
            this.moveCount++;
        }                   
    }
};
//5,0
//2,3
//2,0
//0,2
//5,2
//4,3
//4,0
//1,3
TwoBucket.prototype.startBigger = function() {
    this.starter.current = this.starter.capacity; //5
    this.moveCount++;
    while([this.starter.current, this.other.current].indexOf(this.goal) == -1) {        
        var otherRemainingCapacity = this.other.capacity - this.other.current; // initializes as 3             
        if(otherRemainingCapacity > 0) {
            //pour starter into other
            if(this.starter.current > otherRemainingCapacity) { //fill other completely
                this.starter.current -= otherRemainingCapacity;
                this.other.current = this.other.capacity;
            } else { //empty starter into other completely
                this.other.current += this.starter.current; 
                this.starter.current = 0;
            }            
            this.moveCount++;
        } else {
            //empty other
            this.other.current = 0;                                                
            this.moveCount++;
        }
        if(this.starter.current == 0) {
            //refill only if necessary;
            this.starter.current = this.starter.capacity;
            this.moveCount++;
        }           
    }
};

TwoBucket.prototype.moves = function() {
    return this.moveCount;
};

module.exports = TwoBucket;