const FirstAndLast = (arr, k) => {
    const First = FirstOcc(arr, k)

    const Last = LastOcc(arr, k)


    return [First, Last]
}


const FirstOcc = (arr, k) => {

    let low = 0,
        high = arr.length - 1

    while (low <= high) {
        let mid = parseInt((low + high) / 2)
        if (arr[mid] > k) {
            high = mid - 1
        } else if (arr[mid] < k) {
            low = mid + 1
        } else {
            if (mid == 0) {
                return mid
            } else if (arr[mid - 1] != k) {
                return mid
            } else {
                high = mid - 1
            }
        }
    }
    return -1

}
const LastOcc = (arr, k) => {

    let low = 0,
        high = arr.length - 1

    while (low <= high) {
        let mid = parseInt((low + high) / 2)
        if (arr[mid] > k) {
            high = mid - 1
        } else if (arr[mid] < k) {
            low = mid + 1
        } else {
            if (mid == (arr.length - 1)) {
                return mid
            } else if (arr[mid + 1] != k) {
                return mid
            } else {
                low = mid + 1
            }
        }
    }
    return -1

}
console.log(FirstAndLast([5,7,7,8,8,10], 6))