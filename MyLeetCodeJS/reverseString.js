const reverseString = (s) => {

    let length = s.length / 2
    if (s.length % 2 == 0) {
        length = s.length / 2
    } else {
        length = parseInt(s.length / 2)

    }
    for (let i = 0; i < length; i++) {
        //swapping
        let c = s[(s.length - 1) - i]
        s[(s.length - 1) - i] = s[i]
        s[i] = c
    }
    return s
}

console.log(reverseString([1,2,3,4,5]))