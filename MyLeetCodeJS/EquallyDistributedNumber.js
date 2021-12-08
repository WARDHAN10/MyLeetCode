const EQN = (arr) => {
  let Obj = {};

  for (let i of arr) {
    Obj[i] = Obj[i] ? Obj[i] + 1 : 1;
  }

  let X = Obj[arr[0]];
  console.log(X);

  for (let i in Obj) {
    if (Obj[i] != X || Obj[0] < 2) {
      return false;
    }
  }
  return [true, Obj];
};

console.log(EQN([1,1,1,2,2,2,3,3]));
