const LargestPerimeter = (nums) => {
    nums.sort((a, b) => {
        if (a > b) {
            return 1
        }
        return -1
    })
    console.log(nums)

    for (let i = nums.length - 1; i >= 2; i--) {
        if ((nums[i] + nums[i - 1]) > nums[i - 2] && (nums[i - 1] + nums[i - 2]) > nums[i] && (nums[i] + nums[i - 2]) > nums[i - 1]) {
            return (nums[i] + nums[i - 1] + nums[i - 2])
        }
    }
    return 0
}


console.log(LargestPerimeter([1, 2, 2, 4, 18, 8]))