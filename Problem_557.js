/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  var arr = s.split(" ");
  var soln = "";

  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split("").reverse();
    if (i !== arr.length - 1) soln += arr[i].join("") + " ";
    else soln += arr[i].join("");
  }

  return soln;
};
