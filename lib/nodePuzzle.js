var Puzzle = require ("./puzzle");

var NodePuzzle = function (n) {
  
  this.puzzle = new Puzzle(n);
  
};

NodePuzzle.prototype.toString = function () {
  
  var str = "";
  var value;
  
  
  this.puzzle.state.forEach(function (array) {
    
    str += "|"
    
    array.forEach(function (item) {
      
      value = item || " ";
            
      str += " " + value;
      
    });
    
    str += " |\n";
    
  });
  
  return str;
  
};

NodePuzzle.prototype.getPossibleStates = function () {
  
};

module.exports = NodePuzzle;