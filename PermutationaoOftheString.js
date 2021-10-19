const checkInclusion = (s1, s2) => {
  let SortedS1 = s1.split("").sort().join("");
  let Window = s2.slice(0, s1.length).split("").sort().join("");
  if (SortedS1 == Window) {
    return true;
  }
  for (let j = s1.length; j < s2.length; j++) {
    Window.split("").splice(j - s1.length, 1);
    Window.split('').push(s1[j]);
    console.log(Window)

    if (SortedS1 == Window.sort().join("")) {
      return true;
    }
  }

  return false;
};

console.log(checkInclusion("ab", "eidbaooo"));
