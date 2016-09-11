//forked from https://github.com/ThomasZumsteg/exercism-javascript/blob/master/bracket-push/bracket-push.js
var bracket = function(brackets) {	 
  var stack = [];
  for( var i = 0; i < brackets.length; i++) { // {}
    var character = brackets[i];
    if( lookup.hasOwnProperty(character) ) { // {, [, or (
      stack.push(lookup[character]); // }, ], or )
    } else if( stack.length != 0 && stack[stack.length - 1] == character) { 
      stack.pop(); // works for nested by removing inner before checking outer, no recursion necessary.
    } else { // causes {[)][]} to fail because it pushes a closing bracket ')' before an opening one 
      return false;
    }
  }
  return stack.length == 0;
};

var lookup = {
    "{": "}", 
    "[": "]", 
    "(": ")"
};

module.exports = bracket;