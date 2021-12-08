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

console.log(gcd(7, 25));
