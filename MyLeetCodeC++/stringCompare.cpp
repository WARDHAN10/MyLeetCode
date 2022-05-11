#include <iostream>
using namespace std;
int main()
{
    string str;

    cin >> str;
    int strlen = str.length();
    cout<<str[0]<<strlen;
    if (strlen > 2)
    {
        if (str[strlen - 1] == 'r' && str[strlen - 2] == 'e')
        {
            cout << "er";
        }
    }
    // if (strlen > 3)
    // {
    //     if (str[strlen - 1] == 't' && str[strlen - 2] == "s" && str[strlen - 3] == "i")
    //     {
    //         cout << "ist";
    //     }
    // }
fa
    return 0;
}