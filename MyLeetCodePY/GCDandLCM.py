def computeGCD(x, y):

    while y:
        x, y = y, x % y

    return x


a, b = input().split()
HCF = computeGCD(int(a), int(b))
LCM = (int(a) * int(b)) // HCF
print(HCF, LCM)
# LCM(a,b) X GCD(a,b) = a*b
