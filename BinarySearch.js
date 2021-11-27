const BinarySearch = (arr, key) => {
    let low = 0,
        high = arr.length-1

    while (low <= high) {
        let mid = parseInt((low + high) / 2)

        if (arr[mid] == key) {
            return mid
        } else if (arr[mid] > key) {
            high = mid - 1
        } else if (arr[mid] < key) {
            low = mid + 1
        }
    }


    return false
}

console.log(BinarySearch([22, 23, 45, 48, 50, 66, 80, 97, 108], 50))