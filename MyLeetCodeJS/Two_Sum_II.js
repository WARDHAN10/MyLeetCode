const TwoSum = (numbers, target) => {

    if (target >= 0) {
        for (let i = 0; i < numbers.length; i++) {

            if (numbers[i] <= target) {
                let Newtarget = target - numbers[i] 
                let ans = BinarySearch(numbers, Newtarget, i+1)
                if (ans != -1) {
                    return [i + 1, ans + 1]
                }
            }
        }
    } else {
        for (let i = 0; i < numbers.length; i++) {

            if (numbers[i] <= target) {

                let Newtarget = numbers[i] + (-1 * target)
                let ans = BinarySearch(numbers, Newtarget, i+1)
                if (ans != -1) {
                    return [i + 1, ans + 1]
                }
            }

        }
    }
    return -1
}




const BinarySearch = (arr, target, low) => {
    let high = arr.length - 1
    while (low <= high) {
        let mid = parseInt((low + high) / 2)
        if (arr[mid] == target) {
            return mid
        } else if (arr[mid] > target) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return -1
}
console.log(TwoSum([1,2,3,4,4,9,56,90]
    , 8))

// console.log(BinarySearch([1, 2, 3, 4, 5, 6], 6))