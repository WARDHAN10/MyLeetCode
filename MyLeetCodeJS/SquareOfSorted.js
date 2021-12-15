const SquareOfSorted = (nums) => {
    let SquareArray = [],
        Min = Infinity,
        MinIDX = 0
    //doing the sqaure
    for (let i = 0; i < nums.length; i++) {
        SquareArray.push(nums[i] * nums[i])
    }
    //finding the global minima
    for (let i = 0; i < SquareArray.length; i++) {
        if(Min > SquareArray[i]){
            Min = SquareArray[i]
            MinIDX  = i
        }
    }
    console.log(SquareArray, Min,MinIDX)

    let i = MinIDX - 1,
        j = MinIDX,
        c = 0,
        arr3 = []
    for (; i >= 0 && j < SquareArray.length;) {
        console.log(SquareArray[i], SquareArray[j])
        if (SquareArray[i] <= SquareArray[j]) {
            arr3[c++] = SquareArray[i--]

        } else {
            arr3[c++] = SquareArray[j++]
        }
        console.log(arr3)

    }

    for (; i >= 0;) {
        arr3[c++] = SquareArray[i--]
    }

    for (; j < SquareArray.length;) {
        arr3[c++] = SquareArray[j++]
    }


    return arr3

}

console.log(SquareOfSorted([-5,-3,-2,-1]))