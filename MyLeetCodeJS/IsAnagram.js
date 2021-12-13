const IsAnaGram = (s, t) => {
    let ObjS = {}
    let ObjT = {}
    if (s.length != t.length) {
        return false
    }
    for (let i of s) {

        ObjS[i] = ObjS[i] ? ObjS[i] + 1 : 1
    }
    for (let i of t) {
        ObjT[i] = ObjT[i] ? ObjT[i] + 1 : 1
    }
    for (let i of s) {

        if (ObjS[i] != ObjT[i]) {
            return false
        }

    }
    return true

}

console.log(IsAnaGram("anagram", "nagaram"))