/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  nums.forEach((val, index) => (nums[index] = Math.pow(val, 2)));
  nums.sort((a, b) => {
    return a - b;
  });
  return nums;
};
