function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  let soln = [];
  arr.map((val, index) => {
    soln.push(fn(val, index));
  });
  return soln;
}
