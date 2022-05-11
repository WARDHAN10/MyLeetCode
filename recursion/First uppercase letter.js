function firstUpperCase(s, i) {
  if (i == s.length - 1) {
    return -1;
  }
  if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 97) {
    return s[i];
  }
  return firstUpperCase(s, i + 1);
}

s= "geeksForGeeks"
console.log(firstUpperCase(s,0))