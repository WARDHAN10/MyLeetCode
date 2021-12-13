const countGoodSubstrings = (s) => {
    let count = 0,
        arr = [],
        repeated = false

    //making window 
    if (s.length > 2) {
        for (let i = 0; i < 3; i++) {
            if (arr.includes(s[i])) {

                repeated = true

            }
            arr.push(s[i])

         
        }
    }
    else{
        return 0
    }
    console.log(repeated)

    if (repeated == false) {
        console.log(repeated)
        count += 1
    }
    console.log("initial window", arr, count)

    for (let i = 3; i < s.length; i++) {

        arr.splice(0, 1)
        console.log("before",arr)
        if (arr[0] != s[i] && arr[1] != s[i] && arr[0] != arr[1]) {
            count += 1
            console.log(count)
        }
        arr.push(s[i])
        console.log(arr)

    }


    return count
}


console.log(countGoodSubstrings("aababcabc"))