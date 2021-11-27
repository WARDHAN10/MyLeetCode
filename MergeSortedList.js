function MergeList(l1, l2) {
  const list = [...l1,...l2]
  list.sort()
  return list
}

console.log(MergeList([1, 2, 4], [1, 3, 4]));