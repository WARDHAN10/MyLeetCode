# class Solution:
 
#     def kWeakestRows(self, mat: List[List[int]], k: int) -> List[int]:
#         def BinarySearch(arr, key):
#             low, high = 0, len(arr) - 1

#             while low <= high:
#                 mid = int((low + high) / 2)

#                 if arr[mid] == key:
#                     return mid + 1
#                 elif arr[mid] > key:
#                     high = mid - 1
#                 elif arr[mid] < key:
#                     low = mid + 1

#             return low



#         Occ = []
#         act = []
#         for i in range(len(mat)):
#             count = 0

#             for j in mat[i]:
#                 if j == 1:
#                     count += 1
#             idx = BinarySearch(Occ, count)
#             Occ.insert(idx, count)
#             act.insert(idx, i)
#         " ".join(str(x) for x in act)
#         return " ".join(str(x) for x in act)   