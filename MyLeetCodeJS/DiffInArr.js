const Diff = (arr, diff) => {
  //this is on sorted arr
  //check the diff
  //on the basis of the initilize pointer
  //write cond. to move the pointer

  if (diff > 0) {
    let i = 0,
      j = 1;
    while (i < j) {
      curr = arr[j] - arr[i];
      if (curr == diff) {
        console.log(arr[i], arr[j]);
        return true;
      } else if (curr < diff) {
        j++;
      } else {
        i++;
      }
    }
  } else if (diff == 0) {
    let i = 0,
      j = 0;
    while (i != arr.length - 1 && j != arr.length - 1) {
      curr = arr[i] - arr[j];
      if (curr == diff) {
        console.log(arr[i], arr[j]);
        return true;
      } else if (curr < diff) {
        i++;
      } else {
        j++;
      }
    }
  } else {
        //diff<0

    let i = 0,
      j = 1;
    while (i < j) {
      curr = arr[i] - arr[j];
      if (curr == diff) {
        console.log(arr[i], arr[j]);
        return true;
      } else if (curr < diff) {
        j++;
      } else {
        i++;
      }
    }

  }

  return false;
};

console.log(Diff([1, 3, 5, 7, 9, 21], 4));
