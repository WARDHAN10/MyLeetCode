var containsNearbyDuplicate = function (nums, k) {
  var obj = {};

  for (var i = 0; i < nums.length; i++) {
    if (obj.hasOwnProperty(nums[i])) {
      if (Math.abs(obj[nums[i]] - i) <= k) {
        return true;
      } else {
        obj[nums[i]] = i;
      }
    } else {
      obj[nums[i]] = i;
    }
  }
  return false;
};


console.log(containsNearbyDuplicate([1,2,3,1,2,3],2))