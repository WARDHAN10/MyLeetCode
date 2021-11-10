import math


def CountDivisor(n):
    Sum=0
    if(n == 1):
        return 0

    for i in range(1, math.ceil(math.sqrt(n))):
        if(n % i == 0):
            print(i,n//i)
            if(i * i == n or i == n//i):
                Sum += i
            else:

                Sum += i
                
                Sum += n//i
    return Sum-n


for i in range(int(input())):
    print(CountDivisor(int(input())))
