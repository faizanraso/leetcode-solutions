function compress(chars: string[]): number {
  var newArray = [];
  var lastLetter = chars[0];
  var groupLength = 0;

  if (chars.length == 1) return 1;

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] == lastLetter) groupLength++;
    else {
      newArray.push(lastLetter);
      if (groupLength > 1) newArray.push(...groupLength.toString().split(""));
      lastLetter = chars[i];
      groupLength = 1;
    }
  }

  newArray.push(lastLetter);
  if (groupLength > 1) newArray.push(...groupLength.toString().split(""));

  chars.length = 0;
  for (let i = 0; i < newArray.length; i++) {
    chars[i] = newArray[i];
  }

  return chars.length;
}
