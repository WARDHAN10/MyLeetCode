const SumOfWindow = (arr) => {
    let sum = 0
       
    for (let i of arr) {
        sum += i
    }
    return sum
}
const SmallestSubarray = (arr,k) => {
    let count = 0
    //starting windows
    for (let i = 1; i <= arr.length; i++) {
        let window = []

        for (let j = 0; j < i; j++) {
            window.push(arr[j])
        }

        console.log("window created", window)

        for (let z = i; z < arr.length; z++) {
            window.splice(0, 1)
            window.push(arr[z])
            console.log(window)
        }
        let sum = SumOfWindow(window)
        console.log("sum of window", sum)
        if (sum >= k) {
            count += 1
        }

    }
    return count

}
console.log(SmallestSubarray([1, 2, 3, 4, 5, 6],5))