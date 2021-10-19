var maxAbsValExpr = function (arr1, arr2) {
//   let PrefixMax1 = arr1[0];
//   let PrefixMax2 = arr2[0];
//   let PrefixMaxArr1 = [PrefixMax1];
//   let PrefixMaxArr2 = [PrefixMax2];

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] < PrefixMax1) {
//       PrefixMaxArr1.push(PrefixMax1);
//     } else {
//       PrefixMaxArr1.push(arr1[i]);

//       PrefixMax1 = arr1[i];
//     }
//     if (arr2[i] < PrefixMax2) {
//       PrefixMaxArr2.push(PrefixMax2);
//     } else {
//       PrefixMaxArr2.push(arr2[i]);

//       PrefixMax2 = arr2[i];
//     }
//   }
//   let one =
//     PrefixMaxArr1[PrefixMaxArr1.length - 1] - PrefixMaxArr1[0] < 0
//       ? (PrefixMaxArr1[PrefixMaxArr1.length - 1] - PrefixMaxArr1[0]) * -1
//       : PrefixMaxArr1[PrefixMaxArr1.length - 1] - PrefixMaxArr1[0];
//   let two =
//     PrefixMaxArr2[PrefixMaxArr2.length - 1] - PrefixMaxArr2[0] < 0
//       ? (PrefixMaxArr2[PrefixMaxArr2.length - 1] - PrefixMaxArr2[0]) * -1
//       : PrefixMaxArr2[PrefixMaxArr2.length - 1] - PrefixMaxArr2[0];
//   let indice = arr1.length - 1;
//   console.log(PrefixMaxArr1, PrefixMaxArr2);
//   return one + two + indice;






let Arr1 = arr1.sort((a,b)=>{return b>a})
let Arr2 = arr2.sort((a,b)=>{return b>a})
console.log(Arr1[0]-Arr1[Arr1.length - 1],Arr2[0]-Arr2[Arr2.length - 1],Arr1.length-1)
return Arr1[0]-Arr1[Arr1.length - 1]+Arr2[0]-Arr2[Arr2.length - 1]+Arr1.length-1
};
// [1, -2, -5, 0, 10][(0, -2, -1, -7, -4)];
console.log(maxAbsValExpr([1, -2, -5, 0,10], [0, -2, -1,-7,-4]));
