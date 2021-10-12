// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order. The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.
//
// const candidates = [5, 3, 2];
// const target = 8;
//
//
// const expectedResult = [
//   [2, 2, 2, 2],
//   [2, 3, 3],
//   [3, 5],
// ];
//
//
//

const candidates = [5, 3, 2];
const target = 8;
candidates.sort();

const combinations = [];

function getCombinations(currentSum, currentCombination) {
  for(let i = 0; i < candidates.length; i++) {
    // Deal with the empty start problem.
    let lastNum = currentCombination[currentCombination.length-1] || -1;
    // Make sure the number won't be checked repeatly, and make the number in ascending power(Every item will bigger then the previous one)
    if (lastNum <= candidates[i]) {
      let temp = [...currentCombination];
      temp.push(candidates[i]);
      if (currentSum + candidates[i] === target) {
        // Add into the result if the sum of members matched the target
        combinations.push(temp);
      } else if (currentSum + candidates[i] < target) {
        // If there is still less than target, recursive to check if there's suitable member
        getCombinations(currentSum + candidates[i], temp);
      } else {
        break;
      }
    }
  }
}

getCombinations(0, []);
console.log(combinations);