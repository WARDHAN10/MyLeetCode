var getRow = function (rowIndex) {
  if (rowIndex == 0) {
    let Pascal = [[1]];
    return Pascal[0];
  } else if (rowIndex == 1) {
    let Pascal = [[1, 1]];
    return Pascal[0];
  } else {
    let Pascal = [[1]];
    for (let i = 1; i <= rowIndex; i++) {
      let len = Pascal[i - 1].length;
      Pascal[i] = [1];
      for (let j = 0; j < len - 1; j++) {
        Pascal[i].push(Pascal[i - 1][j] + Pascal[i - 1][j + 1]);
      }
      Pascal[i].push(1);
    }
    return Pascal[Pascal.length - 1];
  }
};

console.log(getRow(33))