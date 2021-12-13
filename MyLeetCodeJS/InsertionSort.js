const insertionSort = (arr) => {
  if (arr.length == 0) {
    return -1;
  }
  let key = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let j = i;
//finding where to insert the element can do better with binary search
    while (j > 0 && arr[j] < arr[j - 1]) {
      let c = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = c;
      j--;
    }
  }

  return arr
};





console.log(insertionSort([5,4,3,2,1]))