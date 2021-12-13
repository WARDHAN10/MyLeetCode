const CountConsectiveOne = (nums) => {
    let count = 0,
        MAX = 0
    for (let i = 0; i < nums.length; i++) {

        if (nums[i] == 1) {
            count += 1
        } else {
            if (MAX <= count) {
                MAX = count
            }
            count=0
        }
    }
    if (MAX <= count) {
        MAX = count
    }
    return MAX
}

console.log(CountConsectiveOne([0,0,0,1]))