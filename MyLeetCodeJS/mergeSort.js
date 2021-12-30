const mergeSort = (arr,left ,right) => {
    if (left > right) {
        return

    }
    let mid = (left + right) / 2
    console.log(arr)
    mergeSort(arr, left, mid)
    mergeSort(arr, mid + 1, right)
}

mergeSort([9, 8, 7, 6, 5, 4, 3, 2, 1], 0, 8)