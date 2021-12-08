const countPair = (arr, k) => {
  let RemArr = [],
    FinalAns = 0;
  for (let i = 1; i <= k; i++) {
    RemArr.push(0);
  }

  for (let i = 0; i < arr.length; i++) {
    RemArr[arr[i] % k]++;
  }
  console.log(RemArr);
  //Taking case for 0 rem basket saperatly
  FinalAns += (RemArr[0] * (RemArr[0] - 1)) / 2;

  //computing pair
  for (let i = 1; i <= k / 2 - 1; i++) {
    FinalAns += RemArr[i] * RemArr[k - i];
  }
  //Dealing with the middle element of the arr
  if (k % 2 == 0) {
    FinalAns += (RemArr[k / 2] * (RemArr[k / 2] - 1)) / 2;
  } else {
    FinalAns += RemArr[k / 2] * RemArr[k / 2 + 1];
  }
  return FinalAns;
};

console.log(countPair([10,20,30,40], 8));
