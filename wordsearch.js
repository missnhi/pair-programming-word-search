const wordSearch = (letters, word) => {
  // Check if array is empty, return false
  if (!letters || letters.length === 0) return false
  
  //Horizontal Join
  const horizontalJoin = letters.map(ls => ls.join(''));
  
  // Create Vertical List
  let verticalJoin = [];
  for (let col = 0; col < letters[0].length; col++) {
    verticalJoin[col] = [];
    for (let row = 0; row < letters.length; row++) {
      verticalJoin[col].push(letters[row][col]);
    }
  }
  
  // Create a Diagonal ( with 2 pyramids)
  let diagonals = [];
  
  //Top Left to bottom right
  for (let col = 0; col < letters[0].length; col++) {
    let i = 0
    let j = col;
    let diagonal = [];
    while (i < letters.length && j >= 0) {
      diagonal.push(letters[i][j]);
      j--; // 2-> 1 -> 0
      i++; // 0 -> 1 -> 2
    }
    diagonals.push(diagonal);
  }
  // bottom right to top left
  for (let row = 1; row < letters.length; row++) {
    let i = row;
    let j = letters[0].length - 1;
    let diagonal = [];
    while (i < letters.length && j >= 0) {
      diagonal.push(letters[i][j]);
      j--; // 2-> 1 -> 0
      i++; // 0 -> 1 -> 2
    }
    diagonals.push(diagonal);
  }
  diagonals = diagonals.map(ls => ls.join(''));
  console.log(diagonals);
  
  
  // create Vertical join
  verticalJoin = verticalJoin.map(ls => ls.join(''));
  
  // Backwards
  let backwardsJoin = letters.map(ls => ls.reverse().join(''));
  
  
  //Checking horizontally
  for (l of horizontalJoin) {
    if (l.includes(word)) return true
  }
  // Checking Vertically
  for (v of verticalJoin) {
    if (v.includes(word)) return true
  }
  // Checking Backwards
  for (b of backwardsJoin) {
    if (b.includes(word)) return true
  }
  //Checking diagonally
  for (d of diagonals) {
    if (d.includes(word)) return true
  }
  // if not exist in neither horizontal or vertical, return false
  return false;
}

module.exports = wordSearch