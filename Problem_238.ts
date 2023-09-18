function productExceptSelf(nums: number[]): number[] {
    let product = 1;
    let productArr: number[] = []
    if(nums.length == 1) return [nums[0]]
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(j !== i){
                product *= nums[j];
            }
        }
        productArr.push(product);
        product = 1;
    }
    return productArr
};