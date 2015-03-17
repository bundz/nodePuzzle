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

Puzzle.prototype.clone = function () {
  
  var clone = new Puzzle(this.state.length);
  
  for(var i = 0; i < this.state.length; i++) {
   
    for(var j = 0; j < this.state.length; j++) {
     
      clone.state[i][j] = this.state[i][j];
      
    }
    
  }
  
  clone.empty = this.empty;
  
  return clone;
  
};

Puzzle.prototype.swap = function (p1, p2) {
  
  var aux = this.state[p1.x][p1.y];
  this.state[p1.x][p1.y] = this.state[p2.x][p2.y];
  this.state[p2.x][p2.y] = aux;
  
  if(this.state[p1.x][p1.y] == null) {
    this.empty = p1;
  }
  
  if(this.state[p2.x][p2.y] == null) {
    this.empty = p2;
  }
  
};

module.exports = Puzzle;