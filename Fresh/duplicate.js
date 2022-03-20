/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  var obj = {};

  for (var i = 0; i < nums.length; i++) {
    if (obj.hasOwnProperty(nums[i])) {
      return true;
    } else {
      obj[nums[i]] = 1;
    }
  }
  return false;
};


console.log(containsDuplicate([1,2,3]))
