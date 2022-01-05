def UglyNumber():
    print()


def BinarySearch(arr, k):
    low, high = 0, len(arr) - 1
    while(low<high):
        mid = (int(low+high)/2)
        if(arr[mid] == k):
            return mid

        elif(arr[mid] > k):
            low = mid +1
        else:
            high = mid -1

