def WeakRow(arr):
    Occ = []
    for i in range(len(arr)):
        count = 0
        
        for j in arr[i]:
            if(j == 1):
                count+=1
            idx = BinarySearch(Occ,count)
            Occ.insert(idx,count)
    return Occ




def BinarySearch(arr, key):
    low,high = 0,len(arr)-1
      

    while (low <= high):
        mid = int((low + high) / 2)

        if (arr[mid] == key) :
            return mid
        elif (arr[mid] > key):
            high = mid - 1
        elif (arr[mid] < key):
            low = mid + 1

    return low
            

print(WeakRow([[1,1,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,1,0,0,0],[1,1,1,1,1]]))