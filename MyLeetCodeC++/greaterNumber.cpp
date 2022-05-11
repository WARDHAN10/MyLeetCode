#include <iostream>
using namespace std;

int main()
{
  int testCase;
  cin >> testCase;
  for (int i = 0; i < testCase; i++)
  {

    // taking 1st array as input
    int len1, len2;
    cin >> len1;
    int arr[len1];
    for (int j = 0; j < len1; j++)
    {
      cin >> arr[j];
    }
    cin >> len2;
    int arr2[len2];
    for (int z = 0; z < len2; ++z)
    {
      cin >> arr2[z];
    }

    if (len1 != len2)
    {
      return 0;
    }
    int resultArr[len2];
    for (int k = 0; k < len1; k++)
    {
      if (arr[k] * 10 + arr2[k] > arr2[k] * 10 + arr[k])
      {
        resultArr[k] = arr[k] * 10 + arr2[k];
      }
      else
      {
        resultArr[k] = arr2[k] * 10 + arr[k];
      }
    }

    for (int l = 0; l < len1; l++)
    {
      cout << resultArr[l] << " ";
    }
  }
}
