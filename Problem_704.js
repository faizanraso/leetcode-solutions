//704. Binary Search

// Binary Search
var search = function (nums, target) {
    var maxIndex = nums.length - 1;
    var minIndex = 0;
    var midIndex = Math.floor(nums.length / 2);
    var loop = 1;
  
    for (var i = 0; i < nums.length; i++) {
      if (nums[midIndex] == target) {
        return midIndex;
      } else if(nums[maxIndex] == target){
          return maxIndex
      } else if(nums[minIndex] == target){
          return minIndex
      } else if (nums[midIndex] > target) {
        maxIndex = midIndex;
        midIndex = Math.floor((maxIndex - minIndex) / 2) + minIndex;
      } else if (nums[midIndex] < target) {
        minIndex = midIndex;
        midIndex = Math.floor((maxIndex - minIndex) / 2) + minIndex;
      }
    }
    return -1;
  }