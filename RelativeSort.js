const relativeSort = (arr1, arr2) => {
  arr1.sort((a, b) => {
    let one = arr2.indexOf(a),
      two = arr2.indexOf(b);
    if (one == -1 && two != -1) {
      return 1;
    } else if (one != -1 && two == -1) {
      return -1;
    } else if (one == -1 && two == -1) {
      if (a > b) {
        return 1;
      } else {
        return -1;
      }
    } else {
      if (one > two) {
        return 1;
      }
      return -1;
    }
  });

  return arr1;
};

console.log(relativeSort([28, 6, 22, 8, 44, 17], [22, 28, 8, 6]));
