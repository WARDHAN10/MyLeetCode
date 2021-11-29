def BS(arr,key,low,high):
    if(type(low) == None or type(high) == None):
        return -1 
    while(low<=high):
        mid = int((low + high) / 2)
        if (arr[mid] == key) :
            return mid
        elif (arr[mid] > key):
            high = mid - 1
        elif (arr[mid] < key):
            low = mid + 1
    return -1

def PivotElement(arr):

    low,high = 0,len(arr)-1
    while(low<=high):
        mid = low+high // 2
        if(arr[mid] <= arr[len(arr)-1]):
            high = mid-1
        else:
            if(arr[mid] > arr[mid+1]):
                return mid
            else:
                low = mid + 1

def MainFunction(arr,k):
    pE = PivotElement(arr)
    if(k > arr[-1]):
        print(BS(arr,k,0,pE))
    else:
        print(BS(arr,k,pE+1,len(arr)-1))


n = int(input())

arr = [int(x) for x in input().strip().split()]
for i in range(int(input())):
    MainFunction(arr,int(input()))




 