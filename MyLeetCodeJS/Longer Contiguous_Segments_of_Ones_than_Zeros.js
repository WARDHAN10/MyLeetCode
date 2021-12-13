const Longest = (s) => {
    let CountOnes = 0,
        CountZeros = 0,
        MAXone = 0,
        MAXzero = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] == '1') {
            CountOnes += 1
        } else {
            if (MAXone < CountOnes) {
                MAXone = CountOnes
            }
            CountOnes = 0
        }
        if (s[i] == '0') {
            CountZeros += 1
        } else {
            if (MAXzero < CountZeros) {
                MAXzero = CountZeros
            }
            CountZeros = 0
        }
    }
    if (MAXone < CountOnes) {
        MAXone = CountOnes
    }
    if (MAXzero < CountZeros) {
        MAXzero = CountZeros
    }

    if (MAXone > MAXzero) {
        console.log(MAXzero, MAXone)
        return true
    }
    return false
}


console.log(Longest("110100010"))