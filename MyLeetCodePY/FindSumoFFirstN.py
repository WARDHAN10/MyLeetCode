def naturalNumber(n):
    if(n == 1):
        return 1
    return naturalNumber(n-1) + n


# print(naturalNumber(10))


# recursion 
# brute force
def pow(x,n):
    if(n == 0):
        return 1
    return pow(x,n - 1)*x


# print(pow(2,3))

# optimize
def myPow(x,n):
    if(n == 0):
        return 1
    if(n%2 == 0):
        return myPow(x*x,n/2)
    else:
        return myPow(x,n - 1)*x

print(myPow(2,1000))
