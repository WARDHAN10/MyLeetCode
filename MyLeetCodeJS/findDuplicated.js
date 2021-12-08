var Duplicated = function (nums) {
    let obj = {};
    
    for (let i of nums) {
      obj[i] = obj[i] ? obj[i] + 1 : 1;
      if(obj[i] > 1){
          return i
      }
    }
}