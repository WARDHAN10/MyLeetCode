const Happy = (n) => {
  let FreqArr = [],
    FinalArr = [];
  for (let i = 2; i < n; i++) {
    FreqArr.push(i);
  }

  for (let i = 2; i < n; i++) {
    let j = i,
      prod = 1;
    while (prod < n) {
      prod = i * j;
      if (FreqArr.includes(prod)) {
        FreqArr.splice(FreqArr.indexOf(prod), 1);
      }
      j++;
    }
  }
  for (let i = 0; i < n; i++) {
    let j = 0,
      count = 0;
    while (FreqArr[j] < i) {
      if (i % FreqArr[j] == 0) {
        count++;
      }

      j++;
    }
    if (count == 2) FinalArr.push(i);
  }
  return [FreqArr,FinalArr];
};
console.log(Happy(20));
