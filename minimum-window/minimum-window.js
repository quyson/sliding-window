/*Minimum Window involes using two pointers to solve. What we're trying to accomplish is finding the shortest
substring in string1 that contains all the letters in string 2. We can create a hashmap to store the amount
of occurences in a given window defined by a left and right pointer. We compare that hashmap to a static
hashmap that contains all values of string 2. To prevent a long time complexity, we initialize two variables
have and need to tell us whether a window has satisfied the condition of having all elements in string2 hashmap
This allows us to check each value in constant time since we will only be comparing two variables instead 
iterating over two hashmaps every time left and right pointers change. We use right and add that to the window
hashmap, we then check if this letter is even a letter that we care about (in string 2 hashmap) and if it
satisfies the condition ( == string2 hashmap letter value). if it does then we would change have by 1. once have
and need is equal, then we will store that information in result and result length. then pop our left window value
from hashmap, we see if thats a ltter we care about and if it desatisfies the condition, if so then have is --. then
we increment left by 1. lastly we increment right by 1. Time Complexity should be O(n) because we will only be
looping once while using other constant time functions. Space should be O(n) because at worse, string 2 could be 
the same size as string 1 which would mean a hashmap as large as string 1. */


const getSolution = (string1, string2) => {
    let freqWindow = {};
    let freqString2 = {};
    let have = 0;
    let need = string2.length;
    let left = 0;
    let right = string2.length;
    let result = [0, 0];
    let resultLength = Infinity;

    for(let i = 0; i < string2.length; i++){
        freqString2[string2[i]] = (freqString2[string2[i]] || 0) + 1
    }

    while(right < string1.length){
        freqWindow[string1[right]] = (freqWindow[string1[right]] || 0) + 1;

        if(freqString2.hasOwnProperty(string1[right]) && freqWindow[string1[right]] == freqString2[string1[right]]){
            have++;
        };

        while(have === need){
            if(right - left + 1 < resultLength){
                resultLength = right - left + 1;
                result = [left, right];
            }
            freqWindow[string1[left]]--;
            if(freqString2.hasOwnPropery(string1[left]) && freqWindow[string1[left]] < freqString2[string1[left]]){
                freqWindow[string1[left]]--
            }
            left++;
        }
        right++;
    }
    if(resultLength != Infinity){
        return string1.slice(result[0], result[1] + 1);
    } else {
        return false
    }
}

let answer = getSolution("ADOBECODEBANC", "ABC");
console.log(answer);