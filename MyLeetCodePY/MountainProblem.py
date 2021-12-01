def MountainArray():
    print()





def Peak(arr):
    low,high = 0,len(arr)-1
    if(low<=high):
        mid = (int(low+high)/2) 
        if arr[mid] >arr[mid +1] and arr[mid] <arr[mid -1]:
            return mid