const RotateArr = (nums, k) => {
  if (nums.length == k) return nums;
  if (nums.length > k) {
    nums = nums
      .slice(nums.length - k, nums.length)
      .concat(nums.slice(0, nums.length - k));
    return nums;
  } else {
    let rem = k % nums.length;
    
    nums.slice(nums.length - rem, nums.length)
      .concat(nums.slice(0, nums.length - rem));
    return nums;
  }
};

console.log(RotateArr([1, 2, 3, 4, 5, 6, 7], 10));
