var readline = require('readline');

const gcd = (a, b) => {
  let rem = 1000;
  if (a == 0) {
    return b;
  } else if (b == 0) {
    return a;
  } else {
    if (a < b) {
      let q = a;

      while (rem != 0) {
        rem = b % a;
        q = a;
        a = rem;
      }
      return q;
    } else {
      let q = b;
      while (rem != 0) {
        rem = a % b;
        q = b;
        b = rem;
      }
      return q;
    }
  }
};
let a = 7, 
b = 25;
let HCF = gcd(a, b);
let LCM = Math.abs((a * b) / HCF);
//LCM(a,b) X GCD(a,b) = a*b
var x= readline()
console.log(`HCF is ${HCF} and LCM is ${LCM}`);
