const BinaryToDecimal = (n) => {
    let Decimal=1, rev = []
    for (let i = 0; i < n.length; i++) {
        Decimal += (2 ** i) * parseInt(n[i])
    }
console.log ( Decimal,String(n).split('').reverse().join(''))  

}

console.log(BinaryToDecimal('00000010100101000001111010011100'))