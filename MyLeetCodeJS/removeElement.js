const removeElement = (nums,val) =>{
    if (nums.length == 0 ){return 0}
    for(let i = 0 ;i<nums.length;i++){
        if(nums[i] == val) {
            console.log(nums[i])
            // nums.push(nums[i])  
            nums.splice(i,1)
        }
    }
    console.log(`index is ${nums.indexOf(val)}`)
  return nums.slice(0,nums.indexOf(val)).length

}

console.log(removeElement([0,1,2,2,3,0,4,2],2))