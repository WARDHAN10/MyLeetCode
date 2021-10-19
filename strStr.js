var strStr = function (haystack, needle) {
  if (haystack.length == 0 && needle.length == 0) {
    return 0;
  }
  if (haystack.length == 0 && needle.length != 0 || needle.length == 0 && haystack.length != 0 )  {
    return -1;
  }
  //   console.log(haystack.length, needle.length);
  // haystack = "hello", needle = "ll"
  if (haystack.length > needle.length) {
    for (let i = 0; i <= haystack.length - needle.length; i++) {
      console.log(haystack.slice(i, needle.length + i));
      console.log("i",i)
      let ins =
        i != haystack.length - needle.length
          ? haystack.slice(i, needle.length + i)
          : haystack.slice(i);

      if (needle == ins) {
        return i;
      }
      if (
        i == haystack.length - needle.length - 1 &&
        needle != haystack.slice(i, needle.length + i)
      ) {
        return -1;
      }
    }
  } else if (haystack.length < needle.length) {
    for (let i = 0; i <= needle.length - haystack.length; i++) {
      let ins =
        i != needle.length - haystack.length
          ? needle.slice(i, haystack.length + i)
          : needle.slice(i);

      if (haystack == ins) {
        return i;
      }
      if (
        (i == needle.length - haystack.length) - 1 &&
        haystack != needle.slice(i, needle.length + i)
      ) {
        return -1;
      }
    }
  } else {
    for (let i = 0; i <= haystack.length; i++) {
      if (needle[i] == haystack[i]) {
        return i;
      }
      if (i == haystack.length - 1 && needle[i] != haystack[i]) {
        return -1;
      }
    }
  }
};

console.log(strStr("abc", "c"));
