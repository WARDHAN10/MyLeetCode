import math


def CountDivisor(n):
    Sum = 0
    if n == 1:
        return 0

    for i in range(1, int(math.sqrt(n)) + 1):
        if n % i == 0:
            if i * i == n:
                Sum += i
            else:
                Sum += i
                Sum += n // i
    return Sum - n


for i in range(int(input())):
    print(CountDivisor(int(input())))
