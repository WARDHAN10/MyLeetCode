function MergeList(l1, l2) {
  let j = 0;
  let len = l2.length + l1.length;
  console.log(len);
  if (l1.length > l2.length) {
    for (let i = 0; i < len; i++) {
      if (l1[i] <= l2[j]) {
        l1.splice(i, 0, l2[j]);
        j++;
      }
    }
    return l1;
  } else {
    for (let i = 0; i < len; i++) {
      console.log(l2);
      if (l2[i] <= l1[j]) {
        l2.splice(i, 0, l1[j]);
        j++;
        
      }
      return l1.sort()
    }
    return l2;
  }
}

console.log(MergeList([1,2,4], [1,3,4]));
