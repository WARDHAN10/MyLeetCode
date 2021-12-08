var arrayNesting = function (nums) {
  let MAX = -Infinity;
  let i = 0,
    count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != -Infinity) {
      let j = i;
      while (nums[j] != -Infinity) {
        count++;
        let ind = j;
        j = nums[j];
        nums[ind] = -Infinity;
        if (MAX < count) MAX = count;
        console.log(nums, MAX);
      }
      count = 0;
    }
  }

  return MAX;
};

console.log(arrayNesting([0, 1, 2]));
