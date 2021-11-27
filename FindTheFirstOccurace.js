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
    return false

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
            if (mid == (arr.length -1)) {
                return mid
            } else if (arr[mid +1 ] != k) {
                return mid
            } else {
            low = mid +1 
            }
        }
    }
    return false

}
console.log(LastOcc([1,1,1,1,2,2,3,3,3,3,3],3))