def squareRoot (num):
    low,high=0,num
    root=0
    while(low<=high):
        mid = int((low+high)/2)
      
        if(mid*mid > num ):
            high = mid-1
        else:
            if((mid+1)*(mid+1) > num):
                root = mid
                break
            else:
                low = mid+1 
    if(root*root == num):
        return 'true'
    else:
        return 'false'
    

print(squareRoot(14))
# for i in range(int(input())):

#     print(squareRoot(int(input())))