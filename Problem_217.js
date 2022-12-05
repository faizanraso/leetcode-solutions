// sets only contain unique values, so converting the array to a set removes the
// duplicates. So then we compare the size of the original array and the set to
// determine if there were any duplicates

var containsDuplicate = function (nums) {
  const newNums = new Set(nums);
  if (newNums.size !== nums.length) {
    return true;
  } else {
    return false;
  }
};
