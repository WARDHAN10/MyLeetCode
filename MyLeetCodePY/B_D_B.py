def main(a,b):
    print(ConvertBinToDecimal(str(a)),ConvertBinToDecimal(str(b)))
    return ConvertDecimailToBin(ConvertBinToDecimal(str(a))+ConvertBinToDecimal(str(b)))
    
    



def ConvertBinToDecimal(num):
    Decimal = 0
    for i in range(len(num)):
        Decimal+=((pow(2,i))*int(num[i]))
    return Decimal
def ConvertDecimailToBin(num):
    Bin=""
    while(num!= 1):
        Bin+=str(num%2)
        num=num//2
    Bin+='1'
    return Bin[::-1]



# print(ConvertBinToDecimal('110'))
print(main(1010,1011))