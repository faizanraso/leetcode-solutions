function increasingTriplet(nums: number[]): boolean {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j; k < nums.length; k++) {
        if (nums[i] < nums[j] && nums[j] < nums[k]) return true;
      }
    }
  }
  return false;
}

function increasingTriplet(nums: number[]): boolean {
  if (nums.length < 3) return false;

  let firstMin: number = Infinity;
  let secondMin: number = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= firstMin) firstMin = nums[i];
    else if (nums[i] <= secondMin) secondMin = nums[i];
    else return true;
  }

  return false;
}
