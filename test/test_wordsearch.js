const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  xit("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')
    
    assert.isFalse(result);
  });
  
  xit("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')
    
    assert.isTrue(result);
  });
  
  // VERTICAL TEST
  xit("should return true if the word is present vertically", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'L', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'O', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'W', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'E', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'R', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'S', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FLOWERS')
    
    assert.isTrue(result);
  });
  
  xit("should return FALSE if the word is NOT present vertically", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'L', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'O', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'W', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'E', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'R', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'S', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FLOUR')
    
    assert.isFalse(result);
  });
  
  xit("should return FALSE for an empty array", function() {
    const result = wordSearch([], 'FLOUR')
    assert.isFalse(result);
  });
  
  
  xit("should return true if the word is present backwards", function() {
    const result = wordSearch([
      ['A', 'W', 'R', 'U', 'O', 'L', 'F', 'L'],
      ['S', 'E', 'I', 'L', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'O', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'W', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'E', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'R', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'S', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FLOUR')
    
    assert.isTrue(result);
  });
  
  it("should return true if the word is present diagonally top left", function() {
    const result = wordSearch([
      ['A', 'W', 'R', 'U', 'O', 'L', 'F', 'L'],
      ['S', 'E', 'I', 'L', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'O', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'W', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'E', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'R', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'S', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'REY')
    
    assert.isTrue(result);
  });
  
  it("should return true if the word is present diagonally bottom right", function() {
    const result = wordSearch([
      ['A', 'W', 'R', 'U', 'O', 'L', 'F', 'L'],
      ['S', 'E', 'I', 'L', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'O', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'W', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'E', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'R', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'S', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'IAU')
    
    assert.isTrue(result);
  });
});
