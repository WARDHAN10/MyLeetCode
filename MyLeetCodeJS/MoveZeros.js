var moveZeroes = function (nums) {
  let len = nums.length;
  nums = nums.filter((a) => {
    return a != 0;
  });
  console.log(nums, len);
  let lenNew = len - nums.length
  for (let i = 0; i < lenNew; i++) {
    nums.push(0);
  }

  return nums;
};

console.log(moveZeroes([0, 0, 0, 0, 0, 0, 1, 1, 1]));
