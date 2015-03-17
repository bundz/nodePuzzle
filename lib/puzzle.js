var Puzzle = function (n) {
  
  this.initialize(n);
  
};

Puzzle.prototype.initialize = function (n) {
  
  this.state = new Array(n);
  var i, j;
   
  for(i = 0; i < n; i++) {
   this.state[i] = new Array(n); 
  }
  
  var value = 1;
  
  for(i = 0; i < n; i++) {
   
    for(j = 0; j < n; j++) {
     
      this.state[i][j] = value;
      value++;
      
    }
    
  }
  
  this.state[i - 1][j - 1] = null;
  
  this.empty = { x: i - 1, y: j - 1 };
  
};

module.exports = Puzzle;