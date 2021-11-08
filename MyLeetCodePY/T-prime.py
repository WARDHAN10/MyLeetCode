def Seive(n):
    Count = []
    if n == 1:
        return Count
    for i in range(2, n + 1):
        Count.append(float(i))

    for i in range(2, n + 1):
        j, Prod = i, 0
        while Prod < n:
            Prod = i * j
            if float(Prod) in Count:
                Count.remove(float(Prod))
            j += 1
    return Count


def T_prime(arr):
    Sum = 0
    seive = Seive(max(arr))
    for i in arr:
        sqrt = i ** 0.5
        if sqrt * sqrt == float(i) and sqrt in seive:
            Sum += i
    return Sum


testCases = int(input())
for i in range(testCases):
    n = int(input())
    arr = [int(x) for x in input().strip().split()]
    print(T_prime(arr))
