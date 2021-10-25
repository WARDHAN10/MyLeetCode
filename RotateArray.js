var rotate = function (matrix) {
  let n = matrix.length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  console.log(matrix);

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n / 2; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][n - 1 - j];
      matrix[i][n - 1 - j] = temp;
      console.log(matrix[i][j],matrix[i][n - 1 - j])

    }
  }
};


console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))