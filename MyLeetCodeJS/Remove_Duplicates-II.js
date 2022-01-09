const RemoveDup = (nums) => {
    let count = 1
  for (let i = 0; i < nums.length; i++) {
      if(nums[i] == nums[i+1]){
          count+=1
          if(count > 2){
              console.log(i)
            nums.splice(i,1)
            i--
          }
      }else{
          count = 1
      }
  }
  
  return nums
};

console.log(RemoveDup([1, 1, 1, 2, 2, 3]));
