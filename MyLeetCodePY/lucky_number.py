    
  


def luckynumber(s,k):
    final = [str(ord(s)-96) for s in list(str(s))]
    final = "".join(final)
    final = [int(s) for s in list(str(final))]

    ans =0
    while(k>0):     
        ans = sum(final)
        if(len(list(str(ans))) == 1):
            return ans
        final = [int(s) for s in list(str(ans))]
        k-=1
    return ans




print(luckynumber("iiii",1))