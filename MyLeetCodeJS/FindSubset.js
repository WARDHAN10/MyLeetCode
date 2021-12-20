const findSubset = (arr,start,end) =>{

    if(start == end) {
        return 
    }
    let Temp = []
    for(let i =start ;i<end;i++){
        Temp.push(arr[i])
    }
    console.log(Temp)
    return findSubset(arr,start+1,end+1)
}


findSubset([1,2,3],0,0)