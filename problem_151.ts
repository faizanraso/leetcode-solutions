function reverseWords(s: string): string {
  let words = s.split(" ");
  let result = "";

  for (let i = words.length - 1; i >= 0; i--) {
    if (words[i] !== "" && words[i] !== " ") {
      result += words[i] + " ";
    }
  }

  return result.slice(0, -1);
}
