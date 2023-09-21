/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    var start = 1;
    var end = n;
    while (start <= end) {
      var curr = Math.floor((end - start) / 2 + start);
      if (isBadVersion(curr)) end = curr - 1;
      else start = curr + 1;
    }
    return start;
  };
};
