def MinMax(arr):
    MIN,MAX =float('inf'),float('-inf')
    for i in arr:
        if(MIN>i):
            MIN = i
        if(MAX < i ):
            MAX = i
    return [MIN,MAX]

def findCount(arr,num):
    smallEq = 0
    for i in arr:
        if i <= num:
            smallEq+=1
    return smallEq

def Kth(arr,k):
    ans= MinMax(arr)
    low,high = ans[0],ans[1]
    while(low<=high):
        mid = int((low+high)/2)
        cnt = findCount(arr,mid)
        if(cnt < k):
            low = mid+1
        else:
            cnt = findCount(arr,mid-1)
            if(cnt<k):
                return mid
            else:
                high = mid - 1 


print(Kth([40,10,10,30,40,20,50,70,50],6))
