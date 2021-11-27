# //time complexity is O(log(N))
def BS():
    n = int(input())
    arr = [int(x) for x in input().strip().split()]
    key = int(input())

    low,high = 0,len(arr)-1
    flag = False

    while (low < high):

        if (arr[low] + arr[high] == key) :
            flag=True
            print(low+1,high+1)
            break
        elif (arr[low] + arr[high] > key):
            high -=1
        else:
            low += 1

    if not flag:
        print(-1)
BS()