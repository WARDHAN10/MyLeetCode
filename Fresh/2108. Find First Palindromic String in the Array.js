var firstPalindrome = function (words) {
  for (var i = 0; i < words.length; i++) {
    if (isPalandrome(words[i])) {
      return words[i];
    }
  }

  return ""
};

const isPalandrome = (string) => {
  for (var i = 0; i < string.length / 2; i++) {
    if (string[i] != string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
};


console.log(firstPalindrome(["def","ghi"]))
