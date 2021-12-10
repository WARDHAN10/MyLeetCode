const MainFunction = (arr, target) => {

    const PeakIndex = FindInMountian(arr)
    console.log(PeakIndex)
    const leftSide = BinarySearchIncreasing(arr.slice(0, PeakIndex), target)
    console.log("l", leftSide, arr.slice(0, PeakIndex))

    const rightSide = BinarySearchDecreasing(arr.slice(PeakIndex , arr.length), target)
    console.log("r", rightSide, arr.slice(PeakIndex , arr.length))

    if (rightSide != -1 && leftSide != -1){
        return leftSide
    }
    else if (rightSide == -1 && leftSide != -1){
        return leftSide
    }
     else if (leftSide == -1 &&  rightSide != -1) {
        return PeakIndex + rightSide + 1 
    }
    return -1
}




















const FindInMountian = (arr) => { //finding the peak element
    let low = 0,
        high = arr.length - 1
    if (arr.length < 3) {
        return false
    }
    while (low <= high) {
        let mid = parseInt((low + high) / 2)
        if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) {
            return mid
        } else if (arr[mid - 1] > arr[mid] && arr[mid] > arr[mid + 1]) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return false
}

const BinarySearchIncreasing = (arr, k) => {

    let low = 0,
        high = arr.length - 1
    console.log(low,high)
        while (low <= high) {
            let mid = parseInt((low + high) / 2)
    
            if (arr[mid] == k) {
                return mid
            } else if (arr[mid] > k) {
                high = mid - 1
            } else {
                low = mid + 1
            }
        }
    return -1

}
const BinarySearchDecreasing = (arr, k) => {

    let low = 0,
        high = arr.length - 1
    console.log(low,high)
        while (low <= high) {
            let mid = parseInt((low + high) / 2)
    
            if (arr[mid] == k) {
                return mid
            } else if (arr[mid] < k) {
                high = mid - 1
            } else {
                low = mid + 1
            }
        }
    return -1

}



console.log(MainFunction([0,5,3,1], 1))