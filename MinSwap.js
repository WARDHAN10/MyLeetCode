function minSwap(arr, n, k) {
  let count = 0;
  let ind = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= k) {
      ind = i;
      break;
    }
  }
  console.log(ind)

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= k) {
      arr.splice(ind, 0, arr.splice(i, 1)[0]);
      console.log(arr)
      count++;
    }
  }
  return count;
}

console.log(minSwap([2, 1, 5, 6, 3],5, 3));
