
const pascal = (n) => {
    if (n == 1) {
      let Pascal = [[1]];
      return Pascal;
    } else if (n == 0) {
      return;
    } else {
      let Pascal = [[1]];
      for (let i = 1; i <= n; i++) {
        let len = Pascal[i - 1].length;
        Pascal[i] = [1];
        for (let j = 0; j < len - 1; j++) {
          Pascal[i].push(Pascal[i - 1][j] + Pascal[i - 1][j + 1]);
        }
        Pascal[i].push(1);
      }
      return Pascal;
    }
  };
const MakingTeam = (m, n, t) => {
  let Pascal = pascal(m + n);
  let Ans =
    Pascal[m + n][t] -
    (Pascal[n][0] * Pascal[m][t] +
      Pascal[n][1] * Pascal[m][t - 1] +
      Pascal[n][2] * Pascal[m][t - 2] +
      Pascal[n][3] * Pascal[m][t - 3]);
  return Ans;
};



console.log(MakingTeam(10,5,6))