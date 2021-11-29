def MainFunction(arr):
    pE = PivotElement(arr)
    if(pE > arr[-1]):



def BS(arr,K):
    low,high = 0,len(arr)-1

    while(low<=high):
        


def PivotElement(arr):

    low,high = 0,len(arr)-1
    while(low<=high):
        mid = low+high // 2
        if(arr[mid] <= arr[len(arr)-1]):
            high = mid-1
        else:
            if(arr[mid] > arr[mid+1]):
                return arr[mid] 
            else:
                low = mid + 1

print(PivotElement([4,5,6,7,0,1,2]))