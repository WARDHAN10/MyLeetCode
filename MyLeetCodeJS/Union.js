// const union = (arr1, arr2) => {
//   let Union = [],
//     i = 0,
//     j = 0,
//     PrevInserted;
// console.log(arr1.length,arr2.length)
//   while (i < arr1.length && j < arr2.length) {
//     console.log(PrevInserted, arr1[i], arr2[j]);
//     if (arr1[i] == arr2[j] && arr1[i] != PrevInserted) {
//       {
//         Union.push(arr1[i]);
//         PrevInserted = arr1[i];
//       }
//       i++
//       j++
//     } else if (arr1[i] < arr2[j]) {
//         Union.push(arr1[i]);
//       i++;
//     } else {
//         Union.push(arr2[j]);
//       j++;
//     }
//   }


//   return Union;
// };

// console.log(union([1, 2, 3, 4, 5], [1, 2, 3]));

const Union = (arr1, arr2) => {
  let UnionArr = [];
  for ( i of arr1) {
    if (!UnionArr.includes(i)) {
      UnionArr.push(i);
    }
  }
  
  for (i of arr2) {
    if (!UnionArr.includes(i)) {
      UnionArr.push(i);
    }
  }
  return UnionArr
};

console.log(Union([1, 2, 3, 4, 5], [1, 2, 3]));

