const search2D = (matrix, target) => {
  let i = 0,
    j = 0;
    console.log(matrix.length)
  while (i < matrix.length) {
    j = matrix[i];
    console.log(j);
    if (j.length == 1) {
      if (j[0] == target) {
        return true;
      }
    }
    if (target > matrix[i][0] && target < matrix[i][j.length - 1]) {
      const BS = BinarySearch(j, target);
      if (BS == -1) {
        i++;
      } else {
        return true;
      }
    } else {
      i++;
    }
  }
  return false;
};

const BinarySearch = (arr, k) => {
  let low = 0;
  let high = arr.length - 1;

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

// console.log(BinarySearch([1, 2, 3, 4, 5, 6], 6));
console.log(search2D([[-5]], - 5));
