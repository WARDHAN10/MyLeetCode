// arr = [-2,0,10,-19,4,6,-8]
// arr = [-10, 12, -20, -8, 15]

const CheckIfExist = (arr) => {

    arr.sort(
        (a, b) => {
            if (a > b) {
                return 1
            }
            return -1
        }
    )
    let i = 0
    let MAX_elem = arr[arr.length - 1]
    console.log(arr)
    while (arr[i] <= MAX_elem / 2) {
        if (binarySearch(arr, 0, arr.length, 2 * arr[i],i)) {
            console.log(arr[i])
            return true
        }
        i++
    }
    return false
}

// console.log(CheckIfExist(arr))

const binarySearch = (arr, low, high, target,idx) => {

    while (low <= high) {
        let mid = parseInt((low + high) / 2)
       
        if (arr[mid] == target && mid!= idx) {
            return true
        } else if (arr[mid] > target) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return false
}




console.log(CheckIfExist([0,0]

))

// console.log(binarySearch([1, 2, 3, 4], 0, 3, 1))