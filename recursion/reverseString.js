function reverseString(s,i){
    if(i == s.length-1){
        return s[i]
    }
    return reverseString(s,i+1)
    
}
var s = "harsh"
console.log(reverseString(s,0))