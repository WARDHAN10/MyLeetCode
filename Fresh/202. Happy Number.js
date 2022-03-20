/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  var seen = [];
  if(n == 1){
      return true
  }
  while (n != 1) {
    n = square(n);

    if (seen.includes(n)) {
      return false;
    }
    seen.push(n);
    if (n == 1) {
      return true;
    }
  }
  return false;
};

const square = (num) => {
  const strNum = String(num);
  var sum = 0;
  for (var i = 0; i < strNum.length; i++) {
    sum += strNum[i] * strNum[i];
  }
  return parseInt(sum);
};

console.log(isHappy(19));
