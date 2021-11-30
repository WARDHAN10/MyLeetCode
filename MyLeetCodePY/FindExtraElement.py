def BS (arr1,arr2):
    low,high = 0 , len(arr1) -1 
    # corner case
    if(arr1[low] != arr2[low] and arr1[low+1] == arr2[low]):
        return low
    if(arr1[-1] != arr2[-1] and arr1[-2] == arr2[-1]):
        return high

    while(low<=high):
        mid=int((low+high)/2)
        if(arr1[mid] == arr2[mid - 1]):
            high =mid -1
        elif(arr1[mid] == arr2[mid]):
            low = mid +1   
        elif(arr1[mid] != arr2[mid] and arr1[mid] != arr2[mid-1]):
            return mid
        else:
            low = mid - 1   
    return -1

# n= int(input())
# arr1 = [int(x) for x in input().strip().split()]
# arr2 = [int(y) for y in input().strip().split()]

# print(BS(arr1,arr2))

print(BS([2,4,6,7,9,10,12],[2,4,6,7,10,12]))