const CountVowel = (s,k) => {
  let count = 0,
    MAX = -Infinity,
    vowel = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < k; i++) {
    if (vowel.includes(s[i])) {
      count++;
    }
  }
  MAX = count;
  for (let j = k; j < s.length  ; j++) {
    if (vowel.includes(s[j - k])) {
      count--;
    }
    if (vowel.includes(s[j])) {
      count++;
    }
    console.log(s[j -2],s[j-1],s[j],count,MAX)

    if (MAX < count) {
      MAX = count;
    }
  }

  return count;
};



console.log(CountVowel("abciiidef",3))
