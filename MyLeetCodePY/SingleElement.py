def SingleElement(arr):
    low,high = 0,len(arr)-1


    while(low<=high):
        mid = int((low+high)/2)
        print(arr[mid],mid)
        if(arr[mid] !=arr[mid-1] and arr[mid] != arr[mid+1]):
        
            return mid
        elif(arr[mid] == arr[mid+1]):
            print('even')
            low = mid + 1
        else:
            print('odd')
            high = mid - 1



SingleElement([3,3,7,7,10,11,11])