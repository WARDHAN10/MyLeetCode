# I have calculated gcd of A and B and then iterated loop from 1 to gcd
# to get common factors dividing both A and B
import math


def GCD(x, y):
    while(y):
        x, y = y, x % y
    return x


def FourDivisor(A, B):
    gcd = GCD(A, B)
    count = 0
    for j in range(1, gcd+1):
        if A % j == 0 and B % j == 0:
            count += 1
    return count


testCase = int(input())
for i in range(testCase):
    A, B = input().strip().split()

    print(FourDivisor(int(A), int(B)))
