const IsMountainArray = (arr) => {
    //finding the peak element
    let low = 0,
        high = arr.length - 1
    if (arr.length < 3) {
        return false
    }


    while (low <= high) {
        let mid = parseInt((low + high) / 2)
        if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) {
            console.log(arr.slice(0,mid),arr.slice(mid+1,arr.length),CheckInc(arr.slice(0,mid)),CheckDec(arr.slice(mid+1,arr.length)))
            if(CheckInc(arr.slice(0,mid)) && CheckDec(arr.slice(mid+1,arr.length)))
                return true
            else return false
        } else if (arr[mid - 1] > arr[mid] && arr[mid] > arr[mid + 1]) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return false
}


const CheckDec = (arr) => {
    if(arr.length == 1){
        return true
    }
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] < arr[i + 1]) {
            return false
        }
    }
    return true
}

const CheckInc = (arr) => {
    if(arr.length == 1){
        return true
    }
    for (let i = 0; i < arr.length ; i++) {

        if (arr[i] > arr[i + 1]) {
            return false
        }
    }
    return true
}
console.log(IsMountainArray([0,3,2,1]))