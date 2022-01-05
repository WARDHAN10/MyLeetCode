const Main = (arr) =>{
    let temp = []
    let ansArr = []
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < arr[row].length; j++) {
          temp[i][j] = false
      }
    }
    return SpiralOrder(arr,0,0,temp,ansArr)
}




const SpiralOrder = (arr, currRow, currColoumn) => {
    let row = arr.length;
    let col = arr[0].length;
  if (
    currRow < 0 ||
    currColoumn < 0 ||
    currRow > row ||
    currColoumn > currColoumn
  ) {
    return;
  }
  if(currColoumn == col){
    return SpiralOrder(arr,currRow+1,currColoumn)
}
if(currRow == row && currColoumn == col || currRow == row){
    return SpiralOrder(arr,currRow,currColoumn - 1)
}
if(currColoumn == 0){
    
}
  SpiralOrder(arr,currRow,currColoumn+1)
  






  temp[currRow][currColoumn] = true
  ansArr.push(arr[currRow][currColoumn])


};
