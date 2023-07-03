using System;

namespace LongestSubstring
{
    class Program
    {
        static void Main(string[] args)
        {
            string letters = "bbbbb";
            int answer = GetSolution(letters);
            Console.WriteLine(answer);
        }
        static int GetSolution(string word)
        {   
            int l = 0;
            int result = 0;
            HashSet<int> set = new HashSet<int>();
            for(int r = 0; r <= word.Length - 1; r++){
                while(set.Contains(word[r])){
                    set.Remove(word[l]);
                    l++;
                }
                set.Add(word[r]);
                result = Math.Max(result, r - l + 1);
            }
            return result;
        }
    }
}