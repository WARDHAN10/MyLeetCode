const WeakRow = (mat) => {
  let Occ = [];
  let act = [];
  for (let i = 0; i < mat.length; i++) {
    let count = 0;
    console.log("i : {0}", i);
    for (let j = 0; j < mat[i].length; j++) {
      //   console.log("j : {0}", j);

      if (mat[i][j] == 1) {
        count += 1;
      }
    }
    idx = BinarySearch(Occ, count);
    console.log("count", i,count);

    Occ.splice(idx, 0, count);
    act.splice(idx, 0, i);
  }
  return act;
};

const BinarySearch = (arr, k) => {
  let low = 0,
    high = arr.length - 1;
  console.log(low, high);
  while (low <= high) {
    let mid = parseInt((low + high) / 2);

    if (arr[mid] == k) {
      return mid;
    } else if (arr[mid] > k) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};

console.log(
  WeakRow([
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1],
  ])
);
