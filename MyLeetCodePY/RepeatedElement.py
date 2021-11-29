def RepeatedElement(arr):
    low,high = 0 ,len(arr)-1

    while(low<=high):
        mid = int((low + high)/2)
        if(arr[mid] == mid ):
            high = mid-1
        else:
            if(arr[mid +1 ] == arr[mid]):
                return arr[mid]
            else:
                low = mid + 1

n = int(input())
arr=[int(x) for x in input().strip().split()]
print(RepeatedElement(arr))