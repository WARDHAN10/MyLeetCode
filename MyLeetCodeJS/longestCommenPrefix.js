const longestCommenPrefix = (arr) => {
    arr.sort(function(a, b){
    
        return a.length - b.length;
      })
    console.log(arr)
    res = 'empty'
    let prefix = arr[0]
    arr.splice(0,1)
    for(let i of arr){
        j = 0
        while(j < i.length){
            if(prefix[j] == i[j]){
                j++

            }else{
                break;
            }
        }
        console.log(j,i,i.length,prefix)

        if( j >= prefix.length){
            prefix = i.slice(0,j)
            res = prefix
        }

    }

    return res
}




console.log(longestCommenPrefix(['flow','flower','fly']))