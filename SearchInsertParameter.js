var searchInsert = function (nums, target) {
  if (nums.includes(target)) {
    return nums.indexOf(target);
  } else {
    for (i of nums) {
      if (i > target) {
        return nums.indexOf(i);
      }
    }
  }
};



console.log(searchInsert([1,3,5,7],6))