const BubbleSort = (arr, n) => {
  let done = false;
  while (!done) {
    done = true;
    i = 0;
    while (i < n - 1) {
      if (arr[i] > arr[i + 1]) {
        //swapping the elements
        let c = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = c;
        done = false
      }
      i++;
    }
  }
  return arr

};


console.log(BubbleSort([5,4,3,2,1],5))
