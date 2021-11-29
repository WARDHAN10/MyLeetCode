import math


def FourDivisor(arr):
    Sum = 0

    for i in arr:
        count, Divisor = 0, []

        for j in range(1, math.floor(math.sqrt(i)) + 1):
            if i % j == 0:
                if j * j == i:
                    count += 1
                    Divisor.append(j)

                else:
                    count += 2
                    Divisor.append(j)
                    Divisor.append(i // j)
        if count == 4:
            Sum += sum(Divisor)
    return Sum



arr = input().strip().split()
arr = [int(x) for x in arr]
print(FourDivisor(arr))
