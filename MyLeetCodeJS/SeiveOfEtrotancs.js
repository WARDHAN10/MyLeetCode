const Seive = (n) => {
  let arr = [];
  for (let i = 2; i <= n; i++) {
    arr.push(i);
  }
  for (let i = 2; i < n; i++) {
    let j = i,
      Prod = 1;
    if (arr.includes(j)) {
      console.log(`j:${j}`);

      while (Prod < n) {
        Prod = j * i;
        if (arr.includes(Prod)) arr.splice(arr.indexOf(Prod), 1);
        j++;
      }
      Prod = 0;
    }
  }

  return arr;
};

console.log(Seive(40));
