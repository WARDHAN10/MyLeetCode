function sorted(arr,i){
    if(arr.length - 1 == i + 1){
        return true
    }
    if(arr[i]> arr[i+1]){
        return false
    }
    return sorted(arr,i+1)
}



console.log(sorted([1,2,4,3,5,6],0))