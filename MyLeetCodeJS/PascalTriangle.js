var generate = function (numRows) {
  if (numRows == 1) {
    let Pascal = [[1]];
    return Pascal;
  } else if (numRows == 0) {
    return;
  } else {
    let Pascal = [[1]];
    for (let i = 1; i <= numRows; i++) {
      let len = Pascal[i - 1].length;
      Pascal[i] = [1];
      for (let j = 0; j < len-1; j++) {
        Pascal[i].push(Pascal[i - 1][j] + Pascal[i - 1][j + 1]);
      }
      Pascal[i].push(1);
    }
    return Pascal[60][30];
  }
};

console.log(generate(60));
