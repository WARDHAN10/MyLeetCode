def computeGCD(x, y):

    while y:
        x, y = y, x % y

    return x


def EQN(arr):
    Obj = {}
    # if arr len is 1 its true
    if len(arr) == 1:
        return "True"
    # frequency of each number
    for i in arr:
        if i in Obj:
            Obj[i] += 1
        else:
            Obj[i] = 1

    result = list(Obj.values())[0]

    for i in Obj.values():
        result = computeGCD(result, i)
    if result > 1:
        return "true"
    else:
        return "false"


T = int(input())

for i in range(T):
    N = int(input())

    arr = input().strip().split()
    arr = [int(x) for x in arr]
    print(EQN(arr))
