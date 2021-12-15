const sortColor = (nums) => {
    nums.sort((a, b) => {
        if (a > b) {
            return 1
        }
        return -1
    })
    return nums
}


console.log(sortColor([2,0,2,1,1,0]))