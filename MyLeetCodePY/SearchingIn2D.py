def BS(arr,key):
    low,high=0,len(arr)-1
    mid = int((low+high)/2)
    # corner case
    if(key < arr[0][0] or key > arr[-1][1]):
        return False
    # find the row in which it can exist
    while(low<=high):
        mid = int((low+high)/2)
        if(arr[mid][low] < key and key < arr[mid][high]) :
            low,high=0,len(arr[mid])-1
            mid = int((low+high)/2)
            break
        elif(arr[mid][high] < key):
            low = mid +1
        elif(arr[mid][low] > key):
            high = mid-1

    innerLow,innerHigh=0,len(arr[mid])-1
    while(innerLow<=innerHigh):
        InnerMid =int((innerLow+innerHigh)/2)
        if(arr[mid][InnerMid] == key):
            return 'true'
        elif(arr[mid][InnerMid] > key): 
            innerHigh = InnerMid -1

        else:
            innerLow = InnerMid + 1
    return 'false'



n,m=input().split()
matrix=[]
for i in range(int(n)):
    col = [int(x) for x in input().strip().split()]
    matrix.append(col)

for j in range(int(input())):
    key =int(input())
print(BS([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]],3))
for j in range(int(input())):
    key =int(input())
    print(BS(matrix,key))
