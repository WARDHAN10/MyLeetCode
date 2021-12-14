// const SmallestSubarray = (arr) => {
//     //make prefix sum array
//     let prefixSum = [arr[0]]

//     for (let i = 1; i < arr.length; i++) {
//         prefixSum[i] = prefixSum[i-1] + arr[i]
//     }
//     for (let i = 0; i < arr.length; i++) {
//         let low = i
//         let high = arr.length - 1
//         while(low<=high){
//             let mid = parseInt((low + high) / 2)
//             if(i == 0){
//                 if(prefixSum[0] >= target){
//                     return 1
//                 }
//             }else{
//                 if()
//             }
//             if(prefixSum[i-1] = prefixSum[i-1] + arr[i]){

//             }

//         }
//     }
// }