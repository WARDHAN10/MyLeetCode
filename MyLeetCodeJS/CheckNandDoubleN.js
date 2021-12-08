

// arr = [-2,0,10,-19,4,6,-8]
arr = [-10,12,-20,-8,15]

const CheckIfExist = (arr) => {
    for (let i of arr) {
        let target = i > 0 ? i * 2: i * -2
        if (arr.includes(target) || arr.includes(-(target))) {
            return true
        }        
    }
    return false
}

console.log(CheckIfExist(arr))

// console.log(binarySearch([10, 2, 5, 3],10))