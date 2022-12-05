var searchInsert = function (nums, target) {
  var lower = 0;
  var upper = nums.length - 1;
  var curr = Math.floor((upper - lower) / 2);

  // check if number has to be inserted at the ends
  if (target > nums[upper]) {
    return upper + 1;
  } else if (target < nums[lower]) {
    return lower;
  }

  // if not, perform binary search
  while (true) {
    if (nums[curr] === target) {
      return curr;
    } else if (nums[lower] === target) {
      return lower;
    } else if (nums[upper] === target) {
      return upper;
    } else if (nums[curr] < target) {
      lower = curr;
      curr = lower + Math.floor((upper - lower) / 2);
    } else if (nums[curr] > target) {
      upper = curr;
      curr = lower + Math.floor((upper - lower) / 2);
    }

    if (lower === curr) {
      return target > nums[lower] ? lower + 1 : lower - 1;
    } else if (upper === curr) {
      return target > nums[upper] ? upper + 1 : upper - 1;
    }
  }
};
