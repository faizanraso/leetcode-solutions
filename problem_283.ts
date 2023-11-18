/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  if (nums.length == 1) return;
  let oldLength = nums.length;

  for (let i = 0; i < oldLength; i++) {
    if (nums[i] !== 0) {
      nums.push(nums[i]);
    }
  }

  let newLength = nums.length;
  let zeros = oldLength - (newLength - oldLength);

  nums.splice(0, oldLength);

  for (let j = 0; j < zeros; j++) {
    nums.push(0);
  }
}

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  if (nums.length == 1) return;
  let originalLength = nums.length;
  let iterations = 0;
  for (let i = 0; i < originalLength; i++) {
    if (iterations > originalLength) break;
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      i--;
    }
    iterations++;
  }
}
