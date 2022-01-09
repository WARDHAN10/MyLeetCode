const IntersectionOfArr = (nums1, nums2) => {
  nums1.sort((a, b) => {
    if (a > b) {
      return 1;
    }
    return -1;
  });
  nums2.sort((a, b) => {
    if (a > b) {
      return 1;
    }
    return -1;
  });
  console.log(nums1, nums2);
  let i = 0,
    j = 0;
  let intersectionArr = [],
    PrevTrue;
  while (i < nums1.length && j < nums2.length) {
    console.log(nums1[i], nums2[j]);
    if (nums1[i] == nums2[j]) {
      if (nums1[i] != PrevTrue) {
        PrevTrue = nums1[i];
        intersectionArr.push(nums1[i]);
      }
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return intersectionArr;
};

// console.log(IntersectionOfArr([1,2,2,1],[2,2]))
// console.log(IntersectionOfArr([1,2],[2,1]))
console.log(IntersectionOfArr([4,9,5],[9,4,9,8,4]))
// console.log(
//   IntersectionOfArr(
//     [
//       54, 93, 21, 73, 84, 60, 18, 62, 59, 89, 83, 89, 25, 39, 41, 55, 78, 27,
//       65, 82, 94, 61, 12, 38, 76, 5, 35, 6, 51, 48, 61, 0, 47, 60, 84, 9, 13,
//       28, 38, 21, 55, 37, 4, 67, 64, 86, 45, 33, 41,
//     ],

//     [
//       17, 17, 87, 98, 18, 53, 2, 69, 74, 73, 20, 85, 59, 89, 84, 91, 84, 34, 44,
//       48, 20, 42, 68, 84, 8, 54, 66, 62, 69, 52, 67, 27, 87, 49, 92, 14, 92, 53,
//       22, 90, 60, 14, 8, 71, 0, 61, 94, 1, 22, 84, 10, 55, 55, 60, 98, 76, 27,
//       35, 84, 28, 4, 2, 9, 44, 86, 12, 17, 89, 35, 68, 17, 41, 21, 65, 59, 86,
//       42, 53, 0, 33, 80, 20,
//     ]
//   )
// );
// console.log(IntersectionOfArr([0,4,9,12,18,21,27,28,33,35,41,48,54,55,55,59,60,61,62,65,67,73,76,84,86,89,94],[18,73,59,89,84,48,54,62,67,27,60,0,61,94,55,76,35,28,4,9,86,12,41,21,65,33]))
// [54,93,21,73,84,60,18,62,59,89,83,89,25,39,41,55,78,27,65,82,94,61,12,38,76,5,35,6,51,48,61,0,47,60,84,9,13,28,38,21,55,37,4,67,64,86,45,33,41]
