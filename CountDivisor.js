const CountDivisor = (n) => {
  let NumArr = [],
    obj = {},
    ans = {},
    Divisor=1;
  for (let i = 2; i <= n; i++) {
    NumArr.push(i);
  }
  for (let i = 2; i <= n; i++) {
    let j = i,
      Prod = 1;
    while (Prod < n) {
      Prod = i * j;
      if (NumArr.includes(Prod)) {
        obj = { ...obj, [Prod]: i };
        NumArr.splice(NumArr.indexOf(Prod), 1);
      }
      j++;
    }
  }
  let rem = 0;
  while (!NumArr.includes(rem)) {
    rem = Number(n) / Number(obj[n]);
    ans[obj[n]] = ans[obj[n]] ? ans[obj[n]] + 1 : 1;

    n = rem;
  }
  if (rem != 0) ans[rem] = ans[rem] ? ans[rem] + 1 : 1;
  //as power will be from 0-----i
  for ( let i in ans){
      Divisor*=(ans[i]+1)
  }
  return Divisor;
};

console.log(CountDivisor(6060));
