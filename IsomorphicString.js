var isIsomorphic = function (s, t) {
  let Obj1 = {},
    Obj2 = {};
  for (i of String(s).split("")) {
    Obj1[i] = Obj1[i] ? Obj1[i] + 1 : 1;
  }
  for (j of String(t).split("")) {
    Obj2[j] = Obj2[j] ? Obj2[j] + 1 : 1;
  }
  console.log(
    JSON.stringify(Object.values(Obj1).sort().join().trim()),
    JSON.stringify(Object.values(Obj2).sort().join().trim())
  );
  if (
    JSON.stringify(Object.values(Obj1).sort()) != JSON.stringify(Object.values(Obj2).sort())
  )
    return false;
  else return true;
};

console.log(isIsomorphic("bbbaaaba", "aaabbbba"));
