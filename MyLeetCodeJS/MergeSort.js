const mergeSort = (arr) => {
  // base condition to recursion
  if (arr.length == 1) {
    return arr;
  }
  let mid = parseInt(arr.length / 2);m
  let l_arr = mergeSort(arr.slice(0, mid));
  let r_arr = mergeSort(arr.slice(mid + 1, arr.length));

  return merge(l_arr, r_arr);
};
const merge = (l_arr, r_arr) => {
  let i = 0,
    j = 0;
  let result = [];

  for (; i < l_arr.length && j < r_arr.length; ) {
    if (l_arr[i] < r_arr[j]) {
      result[i++] = l_arr[i++];
    } else {
      result[j++] = r_arr[j++];
    }
  }
  for (; i < l_arr.length; ) {
    result[i++] = l_arr[i++];
  }

  for (; j < r_arr.length; ) {
    result[j++] = j_arr[j++];
  }
  return result;
};

console.log(mergeSort([7, 6, 5, 4, 3, 2, 1]));
