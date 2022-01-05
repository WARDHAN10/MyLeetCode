<<<<<<< HEAD
def merge(Arr, start, mid, end) :

	# create a temp array
	temp = [0] * (end - start + 1)

	# crawlers for both intervals and for temp
	i, j, k = start, mid+1, 0

	# traverse both lists and in each iteration add smaller of both elements in temp 
	while(i <= mid and j <= end) :
		if(Arr[i] <= Arr[j]) :
			temp[k] = Arr[i]
			k += 1; i += 1
		else :
			temp[k] = Arr[j]
			k += 1; j += 1

	# add elements left in the first interval 
	while(i <= mid) :
		temp[k] = Arr[i]
		k += 1; i += 1

	# add elements left in the second interval 
	while(j <= end) :
		temp[k] = Arr[j]
		k += 1; j += 1

	# copy temp to original interval
	for i in range (start, end+1) :
		Arr[i] = temp[i - start]

def mergeSort(Arr, start, end): 

	if(start < end) :
		mid = (start + end) / 2
		mergeSort(Arr, start, mid)
		mergeSort(Arr, mid+1, end)
		merge(Arr, start, mid, end)


print(mergeSort([5,4,3,2,1],0,4))
=======
def merge_lists(left_sublist,right_sublist):
	i,j = 0,0
    # temp array
	result = []
	#iterate through both left and right sublist
	while i<len(left_sublist) and j<len(right_sublist):
		#if left value is lower than right then append it to the result
		if left_sublist[i] <= right_sublist[j]:
			result.append(left_sublist[i])
			i += 1
		else:
			#if right value is lower than left then append it to the result
			result.append(right_sublist[j])
			j += 1
	#concatenate the rest of the left and right sublists
	result += left_sublist[i:]
	result += right_sublist[j:]
	#return the result
	return result

def merge_sort(input_list):
	#if list contains only 1 element return it
	if len(input_list) <= 1:
		return input_list
	else:
		#split the lists into two sublists and recursively split sublists
		midpoint = int(len(input_list)/2)
		left_sublist = merge_sort(input_list[:midpoint])
		right_sublist = merge_sort(input_list[midpoint:])
		#return the merged list using the merge_list function above
		return merge_lists(left_sublist,right_sublist)


#test run
number_list = [3,1,5,3,2,5,8,2,9,6,12,53,75,22,83,123,12123]
print( merge_sort(number_list))
>>>>>>> 3bd2a6674dbba566cfde489b573a99d76a1342ab
