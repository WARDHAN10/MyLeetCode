# def Divisors(subsequence):

#     count = []
#     for i in range(len(subsequence)):

#         number = subsequence[i]
#         for j in range(number):

#             if number % j == 0:

#                 count[j] += 1
#                 if count[j] == len(subsequence):
#                     return 0

#         return 1

# def solve(subsequence):
#     return Divisors(subsequence)


def GCD(x, y):
    while y:
        x, y = y, x % y

    return x


def HPE(arr):
    result = arr[0]
    for i in range(1, len(arr)):
        result = GCD(result, arr[i])
    if result == 1:
        return 1
    else:
        return 0


for i in range(int(input())):
    n = int(input())
    arr = input().strip().split()
    arr = [int(x) for x in arr]
    print(HPE(arr))
