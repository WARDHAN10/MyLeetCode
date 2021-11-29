def binarySearch(nums):
    low,high = 0,len(nums)-1
    if(nums[low] > nums[low+1]):
        print("l",)
        return low
    if nums[high] > nums[high-1]:
        print("h",high,nums[high])
        return high

    while(low<high):
        mid =int((low+high)/2)
        if(nums[mid] > nums[mid+1] and nums[mid]> nums[mid- 1]):
            print(mid)
            return mid 
        elif(nums[mid-1] > nums[mid]):
            high = mid
        else:
            low = mid+1
    print(low)
    return low      

print(binarySearch([1,2,1,3,5,6,4])
)


