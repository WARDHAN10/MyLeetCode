def fun(x):
    if(x<=0):
        return;
    else:
        fun(x-1)
        print(x)



fun(4)
