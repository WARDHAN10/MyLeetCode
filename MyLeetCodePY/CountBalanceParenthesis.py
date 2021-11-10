def CountParenthesis(n):
    c = [] * (n+1)
    print(c)
    c.append(1) 
    c.append(1)
    for i in range(2, n+1):
        print(i)
        c.append(0)
        for j in range(n):
            c[i] = c[j] * c[i-1-j]
    return c[n]

print(CountParenthesis(5))