def FindPrime(n):
    count=0
    if(n == 1):
        return 1

    result = [True for x in range(n+1)]
    while n > 0:
        if n % 2 == 0 or n % 3 == 0:
            result[n] = False
        n-=1
    result[2] = True
    result[3] = True
    for i in range(len(result)):
        if(result[i]):
            count+=1
    return count

print(FindPrime(2))