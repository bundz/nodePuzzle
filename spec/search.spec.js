var chai = require("chai"),
    expect = chai.expect,
    nodePuzzle = require("../lib/nodePuzzle")
    SearchEngine = require("../lib/searchEngine");

describe("SearchEngine", function () {
  
  var eightPuzzle = new nodePuzzle(3);
  eightPuzzle.puzzle.state = [[null, 5, 2], [1, 4, 3], [7, 8, 6]];
  eightPuzzle.puzzle.empty = { x: 0, y: 0 };
  
  var search = new SearchEngine(eightPuzzle);
  
  describe("when calling the breadth first search", function () {
    
    it("should organize the puzzle", function () {
      
      expect(eightPuzzle.isEndState()).to.be.equals(true);
      
    });
    
  });
  
  describe("when calling the depth first search", function () {
    
    eightPuzzle.puzzle.state = [[null, 5, 2], [1, 4, 3], [7, 8, 6]];
    eightPuzzle.puzzle.empty = { x: 0, y: 0 };
    search.depthFirst();
    
    it("should organize the puzzle", function () {
      
      expect(eightPuzzle.isEndState()).to.be.equals(true);
      
    });
    
  });
  
  describe("when calling the limited depth first search", function () {
    
    eightPuzzle.puzzle.state = [[null, 5, 2], [1, 4, 3], [7, 8, 6]];
    eightPuzzle.puzzle.empty = { x: 0, y: 0 };
    search.limitedDepthFirst(25);
    
    it("should organize the puzzle", function () {
      
      expect(eightPuzzle.isEndState()).to.be.equals(true);
      
    });
    
  });
  
  
});