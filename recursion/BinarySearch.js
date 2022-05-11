function BinarySearch(arr, target, start, end) {
  if (start > end) {
    return -1;
  }
  var mid = parseInt(start + ((end - start) / 2));

  if (arr[mid] == target) {
    return mid;
  }
  if (arr[mid] > target) {
    return BinarySearch(arr, target, start, mid - 1);
  }
  return BinarySearch(arr, target, mid + 1, end);
}
var arr = [-1, 0, 3, 5, 9, 12];
console.log(BinarySearch(arr, 12, 0, arr.length - 1));
