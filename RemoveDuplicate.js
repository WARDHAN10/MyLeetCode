const removeDuplicates = (arr) => {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr1.includes(arr[i])) {
      arr1.push(arr[i]);
    } else {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
};

console.log(removeDuplicates([1, 1, 1,1,1,1,1,2]));
