using System;

namespace Stock
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] array = {7,6,4,3,1};
            int answer = GetSolution(array);
            Console.WriteLine(answer);
        }
        static int GetSolution(int[] array)
        {
            int buy = 0;
            int sell = 1;
            int maxValue = 0;

            while(sell < array.Length){
                if(array[buy] < array[sell]){
                    int value = array[sell] - array[buy];
                    maxValue = Math.Max(value, maxValue);
                } else {
                    buy = sell;
                }
                sell++;
            }

            return maxValue;
        }
    }
}