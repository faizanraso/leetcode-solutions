/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
  var words = text.split(" ");
  var count = words.length;

  for (var i = 0; i < words.length; i++) {
    var writtable = true;
    for (var j = 0; j < brokenLetters.length; j++) {
      if (words[i].includes(brokenLetters[j])) {
        writtable = false;
      }
    }
    if (!writtable) count--;
  }
  return count;
};
