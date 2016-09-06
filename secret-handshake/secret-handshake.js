var SecretHandshake = function(num) {
    if(typeof num != "number") {
        throw new Error("Handshake must be a number");
    }

    var binary = (num).toString(2);
    var reversed = binary.split('').reverse().join('');

    
    this.commands = function() {        
        var output = [];

        if(parseInt(reversed[0])) {
            output.push("wink");
        }
        if(parseInt(reversed[1])) {
            output.push("double blink");
        }
        if(parseInt(reversed[2])) {
            output.push("close your eyes");
        }
        if(parseInt(reversed[3])) {
            output.push("jump");
        }
        if(parseInt(reversed[4])) {
            output.reverse();
        }

        return output;
    }
};

module.exports = SecretHandshake;