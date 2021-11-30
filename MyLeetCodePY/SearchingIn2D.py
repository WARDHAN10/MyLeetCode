def BS(arr,key):
    low,high=0,len(arr)-1
    mid = int((low+high)/2)
    while(low<=high):
        mid = int((low+high)/2)
        print(arr[mid])
        if(arr[mid][0] > key):
             high = mid-1
        elif(arr[mid][-1] > key):
            low = mid +1
        else: 
            print(arr[mid][0])

            innerLow,innerHigh=0,len(arr[mid])-1
            while(innerLow<=innerHigh):
                InnerMid =int((innerLow+innerHigh)/2)
                if(arr[InnerMid] == key):
                    return InnerMid
                elif(arr[InnerMid] > key): 
                    innerHigh = InnerMid -1

                else:
                    innerLow = InnerMid + 1
            return False



print(BS([[1,3,5,7],[10,11,16,20],[23,30,34,60]],3))
        