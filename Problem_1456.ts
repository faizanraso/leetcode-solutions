function isVowel(s: string) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  if (vowels.has(s)) return true;
  return false;
}

function maxVowels(s: string, k: number): number {
  let stringArray = s.split("");
  let maxVowels: number = 0;

  for (let i = 0; i < k; i++) {
    if (isVowel(stringArray[i])) maxVowels++;
  }

  if (maxVowels === k) return k;

  let currWindowVowels: number = maxVowels;
  for (let i = 1; i <= stringArray.length; i++) {
    if (isVowel(stringArray[i - 1])) currWindowVowels--;
    if (isVowel(stringArray[i + k - 1])) currWindowVowels++;
    maxVowels = currWindowVowels > maxVowels ? currWindowVowels : maxVowels;
  }

  return maxVowels;
}
