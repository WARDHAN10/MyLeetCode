var isIsomorphic = function (s, t) {
  let Obj1 = {},
    Obj2 = {};
  for (i of String(s).split("")) {
    Obj1[i] = Obj1[i] ? Obj1[i] + 1 : 1;
  }
  for (j of String(t).split("")) {
    Obj2[j] = Obj2[j] ? Obj2[j] + 1 : 1;
  }
  const val1 = Obj2
  console.log(
    Obj1,Obj2
  );
  // if (
  //   JSON.stringify(Object.values(Obj1).sort()) != JSON.stringify(Object.values(Obj2).sort())
  // )
  //   return false;
  // else return true;
};

console.log(isIsomorphic("paper", "title"));
