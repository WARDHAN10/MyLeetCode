const spiralMatrix = (arr,row,col,len) => {
  let i = arr.length;
  let j = arr[0].length;
    if( row == 0 && col == arr[row].length - 1){
        return
    }
    if( row = arr.length && col == arr[row].length - 1){
        return
    }
    if( row = arr.length && col == 0){
        return
    }
    if( row = arr.length && col == 0){
        return
    }
  return { i, j };
};

console.log(
  spiralMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
