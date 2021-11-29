def FEx(n, k):
    prod = 1
    # termination condition
    if k == 0:
        return 1
    x = FEx(n, k // 2)
    if k % 2 == 0:

        return x * x
    else:
        return x * x * nc
