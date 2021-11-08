var maxChunksToSorted = function (arr) {
  let count = 0,
    MAX = 0;
  for (let i = 0; i < arr.length; i++) {
    if (MAX < arr[i]) {
      MAX = arr[i];
    }
    if (MAX == i) {
      count++;
    }
  }
  return count;
};

console.log(maxChunksToSorted([1,0,2,3,4]));
