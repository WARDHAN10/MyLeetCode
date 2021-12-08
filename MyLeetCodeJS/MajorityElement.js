var majorityElement = function (nums) {
  let obj = {};

  for (let i of nums) {
    obj[i] = obj[i] ? obj[i] + 1 : 1;
  }
  console.log(obj, nums);
  for (i in obj) {
    if (obj[i] > nums.length / 2) {
      return i;
    }
  }
};
