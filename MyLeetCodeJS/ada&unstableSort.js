const unstableSort = (arr) => {
  let FinalArr = [],
    idxx = [];
  for (let i in arr) {
    FinalArr.push({
      value: arr[i],
      idx: i,
    });
  }

  FinalArr.sort((a, b) => {
    if (a.value > b.value) {
      return 1;
    }
    return -1;
  });
  for (let i of FinalArr) {
    idxx.push(parseInt(i.idx) + 1);
  }

  return idxx;
};

console.log(unstableSort([1,2,1,2,1,2]));
