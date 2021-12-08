var majorityElement = function (nums) {
  let obj = {},
    count = 0,
    ResultArr = [];
  for (let i of nums) {
    obj[i] = obj[i] ? obj[i] + 1 : 1;
  }

  for (let i in obj) {
    if (obj[i] > nums.length / 3) {
      ResultArr.push(Number(i));
      count++;
    }
  }

  return ResultArr;
};

console.log(majorityElement([1,2]));
