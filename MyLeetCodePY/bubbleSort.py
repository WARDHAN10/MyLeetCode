def BubbleSort(arr, n):
    done = False
    while not done:
        done = True
        i = 0
        while i < n - 2:
            if arr[i] > arr[i + 2]:
                c = arr[i + 2]
                arr[i + 2] = arr[i]
                arr[i] = c
                done = False

            i += 1

    return arr


for i in range(int(input())):
    n = int(input())
    arr = [int(x) for x in input().strip().split()]
    print(BubbleSort(arr, n))
