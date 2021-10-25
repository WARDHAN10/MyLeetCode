const checkInclusion = (s1, s2) => {
  let SortedS1 = s1.split("").sort().join("");
  let Window = s2.slice(0, s1.length)
  if (SortedS1 == Window.split("").sort().join("")) {
    return true;
  }
  for (let j = Window.length; j < s2.length; j++) {
    Window = Window.split("");
    Window.splice(0, 1);
    Window.push(s2[j]);

    Window = Window.join("");
    console.log(Window.split("").sort().join(""))
    if (SortedS1 == Window.split("").sort().join("")) {
      console.log(Window)
      return true;
    }
  }

  return false;
};

console.log(checkInclusion("adc", "dcda"));
