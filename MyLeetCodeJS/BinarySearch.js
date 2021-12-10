//time complexity is O(log(N))
const BinarySearch = (arr, key) => {
    let low = 0,
        high = arr.length-1

    while (low <= high) {
        let mid = parseInt((low + high) / 2)

        if (arr[mid] == key) {
            return mid
        } else if (arr[mid] < key) {
            high = mid - 1
        } else if (arr[mid] > key) {
            low = mid + 1
        }
    }
    return false
}

console.log(BinarySearch([10,5,3,1],1))