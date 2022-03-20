var isPalindrome = function (s) {
  const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  const newString = s.replace(regex, "").split(" ").join("").toLowerCase();
  for (var i = 0; i < newString.length / 2; i++) {
    if (newString[i] != newString[newString.length -1  - i]) {


      return false;
    }
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
