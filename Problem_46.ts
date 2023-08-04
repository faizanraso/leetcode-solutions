function permute(nums: number[]): number[][] {
  let solution = [];
  if (nums.length == 1) return [nums];

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    const remaining = [...nums].filter((num) => num != curr);
    let perms = permute(remaining);

    for (let j = 0; j < perms.length; j++) {
      solution.push([...perms[j], curr]);
    }
  }

  return solution;
}
