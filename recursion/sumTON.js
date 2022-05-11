var sum = 0
const sumToNatural = (n) => {
    if(n == 0){
        return
    }
    sumToNatural(n-1)
    console.log(n)
    sum+=n
    return sum
};


console.log(sumToNatural(10))
