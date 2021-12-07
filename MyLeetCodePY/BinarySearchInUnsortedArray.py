
# O(n)
def MinMax(arr):
    MAX,MIN = float('-inf'),float('inf')
    for i in arr:
        if(MAX<i):
            MAX = i

        if(MIN > i):
            MIN = i

    return [MAX,MIN]

# O(log(n))
def BS(arr,key):
    ans = MinMax(arr)
    low,high = ans[1],ans[0]

    while(low<=high):
        mid = int((low+high)/2)

        if(key<mid):
            high = mid -1
        else:
            if(key == mid and mid in arr):
               return 'true'
            else:
                low = mid + 1 
    return 'false'
print(
BS([40,10,30,20,50,70],40))