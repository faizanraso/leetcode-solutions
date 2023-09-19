function reverseVowels(s: string): string {
  let letters = s.split("");
  let vowels: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (isVowel(letters[i])) {
      vowels.push(letters[i]);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (isVowel(letters[i])) {
      letters[i] = vowels.pop();
    }
  }

  let result = "";
  for (let i = 0; i < s.length; i++) {
    result += letters[i];
  }

  return result;
}

function isVowel(c: string) {
  if (c == "a" || c == "A") return true;
  else if (c == "e" || c == "E") return true;
  else if (c == "i" || c == "I") return true;
  else if (c == "o" || c == "O") return true;
  else if (c == "u" || c == "U") return true;
  else return false;
}
