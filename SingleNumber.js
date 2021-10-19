const SingleNumber = (arr) => {
  let obj = {};

  for (let i of arr) {
    obj[i] = obj[i] ? obj[i] + 1 : 1;
  }
  for (i in obj) {
    if (obj[i] == 1) {
      return i;
    }
  }
};
console.log(SingleNumber([1]));
