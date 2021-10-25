const Maximize = (p, q, r, arr) => {
  const Pmax = [],
    Smax = [];
  let PMAX = -Infinity,
    SMAX = -Infinity,
    Ans = 0,
    MAX = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (PMAX < arr[i]) {
      Pmax.push(arr[i]);
      PMAX = arr[i];
    } else {
      Pmax.push(PMAX);
    }
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    if (SMAX < arr[i]) {
      Smax.push(arr[i]);
      SMAX = arr[i];
    } else {
      Smax.push(SMAX);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let Ans = p * Pmax[i] + q * arr[i] + r * Smax[i];
    if (MAX < Ans) {
      MAX = Ans;
    }
  }

  return MAX;
};

console.log(Maximize(1, 2, -3, [-1, -2, -3, -4, -5]));
