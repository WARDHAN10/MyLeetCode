def WeakRow(mat):
    Occ = []
    act = []
    for i in range(len(mat)):
        count = 0
        
        for j in mat[i]:
            if(j == 1):
                count+=1
        idx = BinarySearch(Occ,count)
        Occ.insert(idx,count)   
        act.insert(idx,i)

    return act




def BinarySearch(arr, key):
    low,high = 0,len(arr)-1
      

    while (low <= high):
        mid = int((low + high) / 2)

        if (arr[mid] == key) :
            return mid+1
        elif (arr[mid] > key):
            high = mid - 1
        elif (arr[mid] < key):
            low = mid + 1

    return low
            
n,m  =input().split()
matrix = []
  
# For user input
for i in range(int(n)):          # A for loop for row entries
    a =[]
    for j in range(int(m)):      # A for loop for column entries
         a = [int(x) for x in input().strip().split()]
         print(a)
    matrix.append(a)

print(WeakRow(matrix))