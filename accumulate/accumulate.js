var accumulate = function(collection, method) {
    var answer = [];

    for(var i = 0; i < collection.length; i++) {
        var currentMember = collection[i];
        answer.push(method(currentMember));
    }

    return answer; 
};

module.exports = accumulate;