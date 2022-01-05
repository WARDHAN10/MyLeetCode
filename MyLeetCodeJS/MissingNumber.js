var firstMissingPositive = function (nums) {
  let bool = {}
  for (let i = 0; i < nums.length; i++) {
    bool[nums[i]] = true;
  }
  for (let i = 0; i <= nums.length; i++) {
    if (bool[i]) {
      //
    } else {
        return i
    }
  }

  return bool;
};

console.log(firstMissingPositive([3,0,1]));
