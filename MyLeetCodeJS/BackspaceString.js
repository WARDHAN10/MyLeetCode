const Backspace = (s, t) => {
    let i = 0,
        j = 0

    while (i <= s.length && j <= t.length) {
        if (s[i] == t[j]) {
            if (i == s.length - 1 && j != t.length - 1) {
                j++
            } else if (i != s.length - 1 && j == t.length - 1) {
                i++
            } else {
                i++
                j++
            }
        } else {
            if (s[i + 1] == '#' && t[j + 1] == '#' && i + 1 != s.length - 1 && j + 1 != t.length - 1) {
                i += 2
                j += 2
            } else {
                return false
            }

        }
    }

    return true
}

console.log(Backspace('ab#c','ad#c'))