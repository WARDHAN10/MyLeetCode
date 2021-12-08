str = "my name is harshawardhan"
list = []
str1=''
print(str.index('m'))
for i in str:
    str1+=i
    if i == ' ' or i:
        list.append(str1)
        str1=''

    print(str1)
    
    

print(list)
