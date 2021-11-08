def computeGCD(x, y):

    while y:
        x, y = y, x % y

    return x


def SC(N, A, B, K):
    GCD = computeGCD(A, B)
    LCM = A * B // GCD
    Count = (N // A) + (N // B)
    Count -= (N // LCM) + (N // LCM)

    if Count >= K:
        return "Win"
    else:
        return "Lose"


T = int(input())
for i in range(T):
    N, A, B, K = input().split()

    print(SC(int(N), int(A), int(B), int(K)))
