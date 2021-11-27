
class Solution:
    def firstBadVersion(self, n):
        low,high = 1,n
        trueIdx = -1

        while low <=high:
            mid = int((low+high)/2)

            if(isBadVersion(mid) == True):
                 trueIdx = mid
                 high = mid - 1
            else:
                low = mid + 1

           
        return trueIdx