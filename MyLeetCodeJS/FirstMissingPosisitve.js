var firstMissingPositive = function (nums) {
  let bool = {},
    MAX = 0;
  for (let i = 0; i < nums.length; i++) {
    bool[nums[i]] = true;
    if (nums[i] > MAX && nums[i] > 0) {
      MAX = nums[i];
    }
  }

  for (let i = 1; i <= MAX; i++) {
    if (bool[i]) {
      //
    } else {
      return i;
    }
  }

  return MAX + 1;
};

console.log(firstMissingPositive([0]));
