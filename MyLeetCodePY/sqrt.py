def superDigit(x):
    n = [int(x) for x in list(str(x).strip(' '))]

    if(len(n) == 1):
        return n[0]
    
    return  superDigit(sum(n))
    


print(superDigit(input()))
