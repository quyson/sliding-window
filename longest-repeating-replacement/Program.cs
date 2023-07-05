using System;
using System.Collections.Generic;

namespace LongestRepeatingReplacement
{
    class Program
    {
        static void Main(string[] args)
        {
            string word = "AABABBA";
            int target = 1;
            int answer = GetSolution(word, target);
            Console.WriteLine(answer);
        }
        static int GetSolution(string word, int target)
        {
            int left = 0;
            int result = 0;
            Dictionary<char, int> dict = new Dictionary<char, int>();
            
            for(int r = 0; r < word.Length; r++)
            {
                if (!dict.ContainsKey(word[r]))
                    dict[word[r]] = 0;

                dict[word[r]]++;
                while((r - left + 1) - dict.Values.Max() > target)
                {
                    dict[word[left]] = dict[word[left]] - 1;
                    left+=1;
                }
                result = Math.Max(result, r - left + 1);
            }
            return result;
        }
    }
}