const print1ToN =(n)=>{
    if(n == 0){
        return n
    }
     print1ToN(n-1)
     console.log(n)
    return n
} 
print1ToN(10)
// console.log(print1ToN(10))