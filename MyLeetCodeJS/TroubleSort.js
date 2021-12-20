const BubbleSort = (arr, n) => {
    let done = false;
    while (!done) {
      done = true;
      i = 0;
      while (i < n - 1) {
        if (arr[i] > arr[i + 2]) {
          //swapping the elements
          let c = arr[i + 2];
          arr[i + 2] = arr[i];
          arr[i] = c;
          done = false
        }
        i++;
      }
    }
    return arr
  
  };
  
  
  console.log(BubbleSort([5,4,3,2,1],5))
  