

var addBinary = function(a, b) {
  return DecimailToBinary(BinaryToDecimal(a)+BinaryToDecimal(b))
};





const BinaryToDecimal = (n) => {
    let Decimal=1, rev = []
    // n = n.split('').reverse().join('')
    // for (let i = 0; i < n.length; i++) {
    // }

    i = n.length-1
    while(i!=0){
        console.log((n.length-1)-i)
        Decimal += (2 ** (n.length-1)-i) * parseInt(n[i])
        i--
    }
// console.log ( Decimal,String(n).split('').reverse().join(''))  
return Decimal
}
// const DecimailToBinary = (n) => {
//     let bin = 0;
//     let rem, i = 1, step = 1;
//     while (n != 0) {
//         rem = n % 2;
//         n = parseInt(n / 2);
//         bin = bin + rem * i;
//         i = i * 10;
//     }
// return bin
// }


// console.log(addBinary('11','1'))

console.log(BinaryToDecimal("100100111000000"))