def GCD(x, y):
    while y:
        x, y = y, x % y
    return x


def SeiveOFEratons(n):

    SeiveaArr = []
    for i in range(2, n + 1):
        SeiveaArr.append(i)
    for i in SeiveaArr:
        j, Prod = i, 1
        while Prod < n:
            Prod = i * j
            if Prod in SeiveaArr:
                SeiveaArr.remove(Prod)
            j += 1
    return SeiveaArr


def LCM(n):
    # SeiveArr = SeiveOFEratons(n)
    if(n == 1):
        return n
    elif(n == 2):
        return n
    elif n == 3:
        return 6
    else:
    
        if n % 2 == 0:
            if GCD(n, n - 3) == 1:
                A, B, C = n, n - 1, n - 3
            else:
                A, B, C = n, n - 1, n - 2

        else:
            A, B, C = n, n - 1, n - 2

        var = [A, B, C]
        Prod = A * B * C
        result = A
        for i in range(1, 3):
            result = GCD(result, var[i])
        print(result)

        return Prod // result


n = int(input())
print(LCM(n))
