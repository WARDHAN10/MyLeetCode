

var addBinary = function(a, b) {
  return DecimailToBinary(BinaryToDecimal(a)+BinaryToDecimal(b))
};





const BinaryToDecimal = (n) => {
    let Decimal=1, rev = []
    for (let i = 0; i < n.length; i++) {
        Decimal += (2 ** i) * parseInt(n[i])
    }
// console.log ( Decimal,String(n).split('').reverse().join(''))  
return Decimal
}
const DecimailToBinary = (n) => {
    let bin = 0;
    let rem, i = 1, step = 1;
    while (n != 0) {
        rem = n % 2;
        n = parseInt(n / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
return bin
}


console.log(addBinary('11','1'))