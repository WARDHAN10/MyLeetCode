#include <iostream>

using namespace std;

int main()
{
    int testcase;
    cin >> testcase;
    for (int i = 0; i < testcase; i++)
    {
        int len, flag = false;
        cin >> len;
        int arr[len];
        for (int j = 0; j < len; j++)
        {
            cin >> arr[j];
        }
        for (int k = 0; k < len / 2; k++)
        {
            if (arr[k] != arr[len - 1 - k])
            {
                cout << "false";
                flag = true;
                break;
            }
        }
        if (flag == false)
        {
            cout << "true";
        }
    }
    return 0;
}