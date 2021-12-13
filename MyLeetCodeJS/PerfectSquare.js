const PerfectSquare = (num) => {
    let low = 0
    let high = num
    let root = 0
    while (low <= high) {
        let mid = parseInt((low + high) / 2)
        if (mid * mid > num) {
            high = mid - 1

        } else {
            if ((mid + 1) * (mid + 1) > num) {
                root = mid
                break
            } else {
                low = mid + 1
            }
        }
       
    }
    if (root * root == num) {
        return 'true'

    } else {
        return 'false'
    }

}

console.log(PerfectSquare(14))