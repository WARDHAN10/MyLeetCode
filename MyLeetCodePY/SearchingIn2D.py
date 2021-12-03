def BS(matrix,target):
    low,high=0,len(matrix)-1
    mid = int((low+high)/2)
    # corner case
    if(target < matrix[0][0] or target > matrix[-1][-1]):
        return 'false'
    # find the row in which it can exist
    while(low<=high):
        mid = int((low+high)/2)
        if(matrix[mid][low] < target and target < matrix[mid][high]) :
            low,high=0,len(matrix[mid])-1
            mid = int((low+high)/2)
            break
        elif(matrix[mid][high] < target):
            low = mid +1
        elif(matrix[mid][low] > target):
            high = mid-1

    innerLow,innerHigh=0,len(matrix[mid])-1
    while(innerLow<=innerHigh):
        InnerMid =int((innerLow+innerHigh)/2)
        if(matrix[mid][InnerMid] == target):
            return 'true'
        elif(matrix[mid][InnerMid] > target): 
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
    target =int(input())
print(BS([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]],3))
for j in range(int(input())):
    target =int(input())
    print(BS(matrix,key))
