// [1, 5, 0, 2, 0, 1, 3, 0, 6, 3]
// [1, 5, 2, 1, 3, 6, 3, 0, 0, 0]
// create a function that moves 0s to the end of the array

let input1 = [1, 5, 0, 2, 0, 1, 3, 0, 6, 3];
let input2 = [1, 5, 2, 0, 1, 3, 0, 6, 3, 0];

// O(n^2)
// Goal: O(n), no new array
function moveZero(source) {
  let positionPointer = -1;
  for (let i = 0; i < source.length; i++) {
    if (source[i] === 0) {
      // Get the first 0 as the start replace position
      // Other when meet zero do not need to do anything
      if (positionPointer === -1) {
        positionPointer = i;
      }
    } else {
      // Found non-zero element
      if (positionPointer !== -1) {
        // Replace the element of the pointer index
        source[positionPointer] = source[i];
        // Move the pointer to the next index
        positionPointer++;
        // Set the value to zero (ps. I think this is what you mean about I don't have to do the swap. =D)
        source[i] = 0;
      }
    }
  }
  return source;
}

console.log(moveZero(input1));
console.log(moveZero(input2));