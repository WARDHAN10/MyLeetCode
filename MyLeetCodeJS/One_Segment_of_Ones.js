const CountOnes = (s) => {
    if (s.length == 1 && s[0] == '1') {
        return true
    }
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] == '1' && s[i] == s[i + 1]) {
            return true
        }

    }

    return false
}


console.log(CountOnes("1"))