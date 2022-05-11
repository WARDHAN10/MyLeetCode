var obj = {
  min: Infinity,
  max: -Infinity,
};
 
function findMinAndMax(arr,obj,i) {
    if( i == arr.length -1){
        return obj
    }
    if(arr[i] < obj.min){
        obj.min = arr[i]
    }

    if(arr[i] > obj.max){
        obj.max = arr[i]
    }
    return findMinAndMax(arr,obj,i+1)
}


console.log(findMinAndMax([ 1, 4, 45, 6, -50, 10, 2 ],obj,0))