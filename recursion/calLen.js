function calLength(s,i){
    if(!s[i]){
        return 0
    }
    return 1 + calLength(s,i+1)
}


var s = "hello"
console.log(calLength(s,0))