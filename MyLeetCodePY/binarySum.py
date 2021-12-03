def BinarySum ():
    return ConvertDecimailToBin((ConvertBinToDecimal("11") + ConvertBinToDecimal("1")))







def ConvertBinToDecimal(num):
    Decimal = 0
    for i in range(len(num)):
        Decimal+=(pow(2,i))*int(num[i])
    return Decimal
def ConvertDecimailToBin(num):
    Bin=""
    while(num!= 1):
        Bin+=str(num%2)
        num=num//2
    Bin+='1'
    return Bin[::-1]

print(BinarySum())