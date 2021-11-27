def FirstOcc(arr, k):

    low,high = 0,len(arr) - 1

    while (low <= high): 
        mid = int((low + high) / 2)
        if (arr[mid] > k):
            high = mid - 1
        elif (arr[mid] < k):
            low = mid + 1
        else:
            if (mid == 0):
                return mid+1
            elif (arr[mid - 1] != k):
                return mid+1
            else:
                high = mid - 1
            
        
    
    return 0


def LastOcc(arr, k):

    low,high = 0,len(arr) - 1

    while (low <= high): 
        mid = int((low + high) / 2)
        if (arr[mid] > k):
            high = mid - 1
        elif (arr[mid] < k):
            low = mid + 1
        else:
            if (mid == len(arr)-1):
                return mid+1
            elif (arr[mid +1] != k):
                return mid+1
            else:
                low = mid + 1
            
    return ''

n = int(input())
arr = [int(x) for x in input().strip().split()]
for i in range(int(input())):
    k = int(input())
    First = FirstOcc(arr, k)
    Last = LastOcc(arr,k) 
    if(First != 0):
        print(Last-First+1)
    else:
        print(First)