function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  nums1.push(...nums2);
  nums1.sort();
  nums1.splice(0, n);
}
