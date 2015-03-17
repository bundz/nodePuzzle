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
  
  var state = this.puzzle.clone();
  var states = [];
  var x = this.puzzle.empty.x;
  var y = this.puzzle.empty.y;
  
  //left
  if (this.puzzle.empty.y > 0) {
    state.swap({ x: x,  y: y }, { x: x, y: y - 1 });
    states.push(state);
    state = this.puzzle.clone();
  }
  
  //up
  if (this.puzzle.empty.x > 0) {
    state.swap({ x: x,  y: y }, { x: x - 1, y: y });
    states.push(state);
    state = this.puzzle.clone();
  }
  
  //rigth
  if (this.puzzle.empty.y < this.puzzle.state.length - 1) {
    state.swap({ x: x,  y: y }, { x: x, y: y + 1 });
    states.push(state);
    state = this.puzzle.clone();
  }
  
  //down
  if (this.puzzle.empty.x < this.puzzle.state.length - 1) {
    state.swap({ x: x + 1,  y: y }, { x: x, y: y });
    states.push(state);
    state = this.puzzle.clone();
  }
  
  return states;
};

NodePuzzle.prototype.randomize = function () {
  
};

module.exports = NodePuzzle;