const sortByFreq = (arr) => {
  let obj = {};
  let freqArr = [];
  for (i of arr) {
    obj[i] = obj[i] ? obj[i] + 1 : 1;
  }
  for (let i = 0; i < arr.length; i++) {
    freqArr.push({
      value: arr[i],
      freq: obj[arr[i]],
      idx: i,
    });
  }
  freqArr.sort((a,b)=>{
      if(a.freq < b.freq){
          return 1
      }else{
          return -1
      }
  })
  console.log(freqArr)
};



sortByFreq([1,2,3,4,5,1,2,2,2,3,3,3,3,3,3])