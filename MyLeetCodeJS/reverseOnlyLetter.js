var reverseOnlyLetters = (s) => {
    let i = 0,
        j = s.length - 1



    while (i < j) {
        if (!validCharCode(s.charCodeAt(i)) && !validCharCode(s.charCodeAt(j))) {
            i++
            j--
        } else if (!validCharCode(s.charCodeAt(i)) && validCharCode(s.charCodeAt(j))) {
            i++
        } else if (validCharCode(s.charCodeAt(i)) && !validCharCode(s.charCodeAt(j))) {
            j--
        } else {

            s = swap(s,i,j)

            i++
            j--
        }
        console.log
    }
    return s
};




const validCharCode = (charCode) => {
    if (charCode >= 65 && charCode <= 90 || charCode >= 97 && charCode <= 122) {
        return true
    }
    return false
}
const swap = (s, i, j) => {
    s = s.split('')
    let temp = s[i]
    s[i] = s[j]
    s[j] = temp
    return s.join('')
}

console.log(reverseOnlyLetters("ab-cd"))