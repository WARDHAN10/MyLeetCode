def WeakRow(mat, k):
    Occ = []
    act = []
    for i in range(len(mat)):
        count = 0

        for j in mat[i]:
            if j == 1:
                count += 1
        idx = BinarySearch(Occ, count)
        Occ.insert(idx, count)
        act.insert(idx, i)
    return act[:k]


def BinarySearch(arr, key):
    low, high = 0, len(arr) - 1

    while low <= high:
        mid = int((low + high) / 2)

        if arr[mid] > key:
            high = mid - 1
        elif arr[mid] <= key:
            low = mid + 1

    return low


# n,m  =input().split()
# matrix = []

# # For user input
# for i in range(int(n)):          # A for loop for row entries

#     matrix.append([int(x) for x in input().strip().split()])

print(
    WeakRow(
        [
            [1, 1, 0, 0, 0],
            [
                1,
                1,
                1,
                1,
                0,
            ],
            [1, 0, 0, 0, 0],
            [1, 1, 0, 0, 0],
            [1, 1, 1, 1, 1],
        ],5

    )
)

# print(WeakRow([[1, 0], [1, 0], [1, 0], [1, 1]], 4))
