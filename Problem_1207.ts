function uniqueOccurrences(arr: number[]): boolean {
  const numsSet = new Set(arr);
  const countsArr: number[] = [];

  for (const value of numsSet) {
    let count = arr.filter((num) => num === value).length;
    countsArr.push(count);

    if (countsArr.length !== new Set(countsArr).size) return false;
  }
  return true;
}
