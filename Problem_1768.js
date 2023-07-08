var mergeAlternately = function (word1, word2) {
  let merged = "";
  let max = 0;

  if (word1.length > word2.length) {
    max = word1.length;
  } else {
    max = word2.length;
  }

  for (let i = 0; i < max; i++) {
    if (i < word1.length) {
      merged += word1[i];
    }
    if (i < word2.length) {
      merged += word2[i];
    }
  }
  return merged;
};
