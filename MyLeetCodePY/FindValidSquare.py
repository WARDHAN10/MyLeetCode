def squareRoot (num):
    low,high=0,num

    while(low<=high):
        mid = int((low+high)/2)
      
        if(mid*mid > num ):
            high = mid-1
        else:
            if((mid+1)*(mid+1) > num):
                return mid
            else:
                low = mid+1 
    return -1


for i in range(int(input())):

    print(squareRoot(int(input())))