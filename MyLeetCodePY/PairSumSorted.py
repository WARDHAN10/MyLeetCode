# //time complexity is O(log(N))
def BinarySearch(arr, key,i):
    low,high = i,len(arr)-1
      

    while (low <= high):
        mid = int((low + high) / 2)

        if (arr[mid] == key) :
            return mid
        elif (arr[mid] > key):
            high = mid - 1
        elif (arr[mid] < key):
            low = mid + 1

    return -1
n = int(input())
arr = [int(x) for x in input().strip().split()]
key = int(input())

done = False
for i in range(0,len(arr)):
    num = abs(key - arr[i])
    ans=BinarySearch(arr, num,i)
    if(ans != -1):
        done = True
        print(arr[i],print(ans))
        break
if(done == False):
    print('-1')