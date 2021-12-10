const UglyNumber = (n) => {
    const ans = SOE(n)
    if( n == 1){
        return true
    }
    if (ans.length <= 3) {
        if (ans.length == 1) {
            if (ans.includes(2) || ans.includes(3) || ans.includes(5)) {
                return true
            }
        } else if (ans.length == 2) {
            console.log(ans)

            if (ans.includes(2) && ans.includes(3) || ans.includes(5) && ans.includes(2) || ans.includes(3) && ans.includes(5)) {
                return true
            }
        } else {
            if (ans.includes(2) && ans.includes(3) && ans.includes(5)) {
                return true
            }
        }

    }
    return false
}




const SOE = (n) => {
    let prime = []
    for (let i = 0; i < n + 1; i++) {
        prime.push(true)
    }
    if (n == 1) {
        return 1
    }
    let p = 2
    while (p * p <= n) {
        if (prime[p] == true) {
            for (let j = p * 2; j < n + 1; j += p) {
                prime[j] = false
            }
        }
        p += 1
    }
    prime[0] = false
    prime[1] = false
    const NewPrime = []
    for (let i = 0; i < prime.length; i++) {
        if (prime[i] && n % i == 0) {
            NewPrime.push(i)
        }
    }
    return NewPrime
}



console.log(UglyNumber(14))