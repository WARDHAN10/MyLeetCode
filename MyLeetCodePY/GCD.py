def gcd(a, b):
    rem = 1000
    if a == 0:
        result = b
        return result
    elif b == 0:
        result = a
        return result
    else:
        if a < b:
            q = a

            while rem != 0:
                rem = b % a
                q = a
                a = rem
            result = q
            return result
        else:
            q = b
            while rem != 0:
                rem = a % b
                q = b
                b = rem
            result = q

            return result


arr = input().strip().split()
arr = [int(x) for x in arr]
result = arr[0]
for i in range(len(arr)):
    print(gcd(result, arr[i]))
