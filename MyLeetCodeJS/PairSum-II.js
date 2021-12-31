function getPairsCount(arr, n, k) {
    //input should always be sorted
    arr.sort()

    let i = 0,
        j = n - 1,
        count = 0
    while (i < j) {
        let curr = arr[i] + arr[j]
        if (curr < k) {
            i++
        } else if (curr > k) {
            j--
        } else {
            let val1 = arr[i],
                val2 = arr[j],
                c1 = 0,
                c2 = 0
            if (arr[i] == arr[j]) {
                let l = (j - i) + 1
                count += (l * (l - 1)) / 2
                break
            }
            while (arr[i] == val1) {
                console.log("i", i)
                i++;
                c1++
            }
            while (arr[j] == val2) {
                console.log("j", j)
                j--;
                c2++
            }

            count += (c1 * c2)

        }
    }
    return count
}

console.log(getPairsCount([1, 5, 7, 1], 4, 6))