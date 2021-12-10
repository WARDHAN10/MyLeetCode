const unstableSort = (arr) => {
    let FinalArr = []
    for (let i in arr) {
        FinalArr.push({
            value: arr[i],
            idx: i
        })
    }


    FinalArr.sort((a, b) => {

        if (a.value > b.value) {
            return 1
        }
        return -1

    })
    for(let i in FinalArr){
        
    }
    console.log(FinalArr)

}

unstableSort([3,2,1])