function findMaxAverage(nums: number[], k: number): number {
  if (k == 1) return Math.max(...nums);
  if (k === nums.length) return nums.reduce((acc, curr) => acc + curr, 0) / k;

  let currWindowSum: number = nums
    .slice(0, k)
    .reduce((acc, curr) => curr + acc, 0);
  let maxSum: number = currWindowSum;

  for (let i = k; i <= nums.length - 1; i++) {
    currWindowSum += nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, currWindowSum);
  }

  return maxSum / k;
}
