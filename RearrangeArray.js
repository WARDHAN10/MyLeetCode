const Rearrange = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      let ind = arr[i],
        val = i;
      while (ind != i) {
        let temp = arr[ind];
        arr[ind] = -(val + 1);
        val = ind;
        ind = temp;
      }
      arr[ind] = -(val + 1);
    }
  }

  for (i = 0; i < arr.length; i++) {
    arr[i] = -1 * arr[i] - 1;
  }
  return arr;
};

console.log(Rearrange([1, 3, 0, 2]));
