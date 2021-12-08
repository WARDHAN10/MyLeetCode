const PMQ = (n) => {
  let NumArr = [],
    obj = {},
    ans = [];
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
    ans.push(obj[n]);

    n = rem;
  }
  if (rem != 0) ans.push(rem);

  return ans;
};

console.log(PMQ(6060));
