# //time complexity is O(log(N))
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

    return -1
n = int(input())
arr = [int(x) for x in input().strip().split()]
for i in range(int(input())):
    k = int(input())
    print(BinarySearch(arr, k))