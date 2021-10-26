var firstMissingPositive = function (nums) {
  nums = nums.filter((elem) => {
    return elem >= 0;
  });
  nums = nums.sort();

  if (nums.length == 0 || nums[0] > 1) return 1;

  for (let i = 1; i <= nums.length; i++) {
    console.log(nums[i], i);
    if(nums[i] != i && nums[i] == nums[nums.length - 1]){
        return nums[i] +1
    } 
    if (nums[i] != i) {
      return nums[i - 1] + 1;
    }
  }
};

console.log(firstMissingPositive([2,1]));
