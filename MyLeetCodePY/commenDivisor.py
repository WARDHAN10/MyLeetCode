import math


def FourDivisor(A, B):
    MIN = min(A, B)
    MAX = max(A,B)
    count,start = 0,2
    if(A == B or MAX % MIN == 0): start = 1
    for j in range(start, math.ceil(math.sqrt(MIN))):
        if A % j == 0 and B % j == 0:
            if j * j == A or j * j == B:
                count += 1
            else:
                count += 2
    return count


testCase = int(input())
for i in range(testCase):
    A, B = input().strip().split()

    print(FourDivisor(int(A), int(B)))
