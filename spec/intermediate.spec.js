var chai = require("chai"),
    expect = chai.expect,
    nodePuzzle = require("../lib/nodePuzzle")
    SearchEngine = require("../lib/searchEngine");

describe("intermediate", function () {
  
  var eightPuzzle = new nodePuzzle(3);
  
  describe("when calling the method getPossibleStates", function () {
  
    var possibleStates = eightPuzzle.getPossibleStates();
    
    it("each puzzle returned should have state and the position of the blank block", function () {
      
      expect(possibleStates[0]).to.have.property('empty');
      expect(possibleStates[0]).to.have.property('state');
      expect(possibleStates[1]).to.have.property('empty');
      expect(possibleStates[1]).to.have.property('state');
      
    });
    
    it("each returned puzzle should have the right possible states and the right blank block", function () {
      expect(possibleStates[0].state.toString()).to.be.equals([[1, 2, 3], [4, 5, 6], [7, null, 8]].toString());
      expect(possibleStates[1].state.toString()).to.be.equals([[1, 2, 3], [4, 5, null], [7, 8, 6]].toString());
      expect(possibleStates[0].empty.x).to.be.equals(2);
      expect(possibleStates[0].empty.y).to.be.equals(1);
      expect(possibleStates[1].empty.x).to.be.equals(1);
      expect(possibleStates[1].empty.y).to.be.equals(2);
    });
    
  });
  
});