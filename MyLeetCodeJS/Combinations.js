let temp = []
const combination = (n, k, i, j ,temp) => {
    let arr = []
    console.log([i,j]);
    for(let k = i; k <= j ;k++){
        arr.push(k)
        
    }
    console.log("a",arr)
    temp.push(arr)

    if (i == n - 1 && j == n) {
        return temp;
      }
    if (j == n) {
        i++;
        j = i;
    }

 

  return combination(n, k, i, j + 1,temp);
};

console.log(combination(4, 2, 1, 2,temp));
