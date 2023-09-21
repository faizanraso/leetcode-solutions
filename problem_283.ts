/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {
    if(nums.length == 1) return
    let oldLength = nums.length

    for(let i = 0; i < oldLength; i++){
        if(nums[i] !== 0){
            nums.push(nums[i]);
        }
    }

    let newLength = nums.length;
    let zeros = oldLength - (newLength - oldLength);

    nums.splice(0, oldLength)

    for(let j = 0; j < zeros; j++){
        nums.push(0);
    }

};