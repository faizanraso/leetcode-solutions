function findDifference(nums1: number[], nums2: number[]): number[][] {
  let soln: number[][] = [[], []];

  if (nums1 === nums2) return soln;

  let nums1Set = new Set(nums1);
  let nums2Set = new Set(nums2);

  let allNumsSet = new Set(nums1.concat(...nums2));
  let combinedArr = Array.from(allNumsSet);

  for (let i = 0; i < combinedArr.length; i++) {
    if (nums1Set.has(combinedArr[i]) && nums2Set.has(combinedArr[i])) continue;
    else if (nums1Set.has(combinedArr[i])) soln[0].push(combinedArr[i]);
    else soln[1].push(combinedArr[i]);
  }

  return soln;
}
