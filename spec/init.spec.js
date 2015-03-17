var chai = require("chai"),
    expect = chai.expect,
    nodePuzzle = require("../lib/nodePuzzle");


describe("nodePuzzle", function () {
  
  describe("When creating a new instance of nodePuzzle", function () {
    
    eightPuzzle = new nodePuzzle(3);
    threePuzzle = new nodePuzzle(2);
    fifteenPuzzle = new nodePuzzle(4);
    
    
    it("should creaate a quadratic matrix with value passed", function () {
      expect(eightPuzzle.puzzle.state.length).to.be.equals(3);
      expect(threePuzzle.puzzle.state.length).to.be.equals(2);
      expect(fifteenPuzzle.puzzle.state.length).to.be.equals(4);
      
      eightPuzzle.puzzle.state.forEach(function (array) {
        expect(array.length).to.be.equals(3);
      });
      
      threePuzzle.puzzle.state.forEach(function (array) {
        expect(array.length).to.be.equals(2);
      });
      
      fifteenPuzzle.puzzle.state.forEach(function (array) {
        expect(array.length).to.be.equals(4);
      });
      
    });
    
    it("toString should return should return a string with the printable puzzle", function () {
      
      expect(eightPuzzle.toString()).to.be.equals("| 1 2 3 |\n| 4 5 6 |\n| 7 8   |\n");
      expect(threePuzzle.toString()).to.be.equals("| 1 2 |\n| 3   |\n");
      
    });
    
    it("the new instance should have the puzzle organized", function () {
      
      expect(eightPuzzle.puzzle.state[0].toString()).to.be.equals([1, 2, 3].toString());
      expect(eightPuzzle.puzzle.state[1].toString()).to.be.equals([4, 5, 6].toString());
      expect(eightPuzzle.puzzle.state[2].toString()).to.be.equals([7, 8, null].toString());
      
    });
    
  });
  
});


