function tri_sum(arr) {
    var newArr = new Array()
    if(arr.length == 1){
        return arr
    }
    for(var i = 0;i<arr.length-1;i++){
        newArr[i] = arr[i] + arr[i+1]
    }
    return tri_sum(newArr)
}



console.log(tri_sum([1,2,3,4,5]))
