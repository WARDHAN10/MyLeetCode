const reverseWords = (s) => {

    s = String(s).split(' ')
    console.log(s)
    let ReversedString = []
    for (let i=0;i<s.length;i++) {
        ReversedString.push(Reverse(s[i]))
    }
    return ReversedString.join(' ')
}




const Reverse = (s) => {
    let i = 0,
        j = s.length - 1
    s = s.split('')
    while (i < j) {
        let temp = s[i]
        s[i] = s[j]
        s[j] = temp
        i++;
        j--
    }
    return s.join('')
}

console.log(reverseWords("God Ding"))