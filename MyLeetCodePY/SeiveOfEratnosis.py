def SOE(n):
    prime = [True for i in range(n + 1)]
    if n == 1:
        return 1
    p = 2
    while p * p <= n:
        if prime[p] == True:
            for j in range(p * 2, n + 1, p):
                prime[j] = False
        p += 1
    prime[0] = False
    prime[1] = False
    PrimeCount, NonPrime = 0, 0
    for i in range(len(prime)):
        if prime[i]:
            PrimeCount += 1

    NonPrime = n - PrimeCount
    print(NonPrime, prime, PrimeCount)
    Max = max(PrimeCount, NonPrime)
    Min = min(PrimeCount, NonPrime)
    FactA, FactB = 1, 0
    for i in range(1, Max + 1):
        FactA *= i
        FactA = FactA % 1000000007
        if i == Min:
            FactB = FactA

    # return PrimeCount,NonPrime
    return (FactA % 1000000007 * FactB % 1000000007) % 1000000007


for i in range(int(input())):

    print(SOE(int(input())))
