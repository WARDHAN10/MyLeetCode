const plusOne = (arr) => {
  return (BigInt(arr.join("")) + BigInt(1)).toString().split("");
};

console.log(plusOne([9]));
