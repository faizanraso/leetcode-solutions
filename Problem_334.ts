function increasingTriplet(nums: number[]): boolean {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++){
            for(let k = j; k < nums.length; k++){
                if(nums[i] < nums[j] && nums[j] < nums[k]) return true
            }
        }
    }
    return false
};