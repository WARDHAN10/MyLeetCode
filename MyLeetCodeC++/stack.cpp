#include <iostream>
using namespace std;

class Stack
{
private:
    int arr, top, size;
public:
    Stack()
    {
        this->arr = [1];
        this->top = -1;
        this->size = 0;
    };
    void push(int x)
    {
        if (top == (size - 1))
        {
            cout << "overflow";
        }
        size++;
        top++;
        arr[top] = x;
        return;
    }


   void print()
    {
        int size = top;
        if (top == -1)
        {
            cout << "empty";
        }
        while (size != -1)
        {
            cout << arr[size];
            size--;
        }
    return;
    }
};

int
main()
{
    Stack stk;
    stk.print();
    return 0;
}