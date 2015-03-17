var SearchEngine = function (puzzle) {
  this.puzzle = puzzle;
};

SearchEngine.prototype.breadthFirst = function () {
  
  var queue = [];
  var visited = [];
  var state, possibleStates;
  
  queue.unshift(this.puzzle.puzzle);
    
  while (queue.length > 0) {
    
    this.puzzle.puzzle = queue.pop();
    visited.push(this.puzzle.puzzle);
    
    if (this.puzzle.isEndState()) {
      return true;
    }
    
    possibleStates = this.puzzle.getPossibleStates();
    
    possibleStates.forEach(function (possibleState) {
      
      if (!wasVisited(visited, possibleState)) {
        
        queue.unshift(possibleState);
        
      }
      
    });
    
  }
  
  return false;
  
};

SearchEngine.prototype.depthFirst = function () {
  
  var stack = [];
  var visited = [];
  var state, possibleStates;
  
  stack.push(this.puzzle.puzzle);
    
  while (stack.length > 0) {
    
    this.puzzle.puzzle = stack.pop();
    visited.push(this.puzzle.puzzle);
    
    if (this.puzzle.isEndState()) {
      return true;
    }
    
    possibleStates = this.puzzle.getPossibleStates();
    
    possibleStates.forEach(function (possibleState) {
      
      if (!wasVisited(visited, possibleState)) {
        
        stack.push(possibleState);
        
      }
      
    });
    
  }
  
  return false;
  
};

function wasVisited (visited, puzzle) {
  
  for(var i = 0; i < visited.length; i++) {
    if(isEqual(visited[i], puzzle)) {
     return true; 
    }
  }
  
  return false;
  
}

function isEqual (p1, p2) {
  
  for(var i = 0; i < p1.state.length; i++) {
    
    for(var j = 0; j < p1.state.length; j++) {
     
      if(p1.state[i][j] != p2.state[i][j]) {
        return false; 
      }
      
    }
    
  }
  
  return true;
  
}


module.exports = SearchEngine;