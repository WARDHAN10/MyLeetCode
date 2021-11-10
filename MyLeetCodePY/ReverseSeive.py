import math


# def SieveOfEratosthenes(n):
#     prime = [True for i in range(n + 1)]
#     p = n
#     while(p > 2):

#         if (prime[p] == True):
#             for i in range(2, math.ceil(math.sqrt(p))+1):

#                 if p % i == 0 or i*i == p:
#                     prime[p] = False
#         p -= 1
#     prime[0] = False
#     prime[1] = False

#     return prime
def SieveOfEratosthenes(n):
    prime = [True for i in range(n + 1)]
    p = 2
    while (p * p <= n):
        if (prime[p] == True):
            for i in range(p * 2, n + 1, p):
                prime[i] = False
        p += 1
    prime[0] = False
    prime[1] = False
    return prime  

def Count(n, seive):
    count = 0
    for i in range(n+1):
        if seive[i]:
            count += 1
    return count


seive = SieveOfEratosthenes(100000)
for i in range(int(input())):
    print(Count(int(input()), seive))
