function productExceptSelf(nums: number[]): number[] {
  let product = 1;
  let productArr: number[] = [];
  if (nums.length == 1) return [nums[0]];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (j !== i) {
        product *= nums[j];
      }
    }
    productArr.push(product);
    product = 1;
  }
  return productArr;
}

function productExceptSelf(nums: number[]): number[] {
  let prefix: number[] = Array(nums.length).fill(1);
  let postfix: number[] = Array(nums.length).fill(1);

  for (let i = 0; i < nums.length; i++) {
    if (i == 0) prefix[i] = nums[i];
    else prefix[i] = nums[i] * prefix[i - 1];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i == nums.length - 1) postfix[i] = nums[i];
    else postfix[i] = nums[i] * postfix[i + 1];
  }

  let output: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (i == 0) output.push(1 * postfix[1]);
    else if (i == nums.length - 1) output.push(prefix[i - 1] * 1);
    else output.push(prefix[i - 1] * postfix[i + 1]);
  }

  return output;
}
