const RemoveDuplicateElement = (s) => {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (!arr.includes(s[i])) {
      arr.push(s[i]);
    }
  }
  return arr
    .sort((a, b) => {
      if (a > b) {
        return 1;
      }
      return -1;
    })
    .join('');
};

console.log(RemoveDuplicateElement("cbacdcbc"));
