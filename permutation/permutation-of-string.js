/*Essentially, this is a sliding window question with a bit more to do on top of that. The goal is to check
if string1 is in string2 in any order, but most be next to each other. Therefore, we can use hashmaps or arrays
to keep track of values. string 1 would have a 1 for each of it's letters and 0's for letters not in the string.
Then we will intialize two pointers, left which will be 0 and right which will be the length of string 1. 
While right is less than the length of string 2, we will check if each array is equal, if not then move left and
right by 1. then adjust counter for both arrays depending on taking left out or adding new right value in. eventually
there should be a window that matches but if not then it's false. Time Complexity should be O(n), and Space
is O(1) because it's always gonna be 2 arrays of the same length.
*/

function checkInclusion(s1, s2) {
  if (s1.length > s2.length) {
    return false;
  }
  
  const freq1 = Array(26).fill(0);
  const freq2 = Array(26).fill(0);
  
  for (let i = 0; i < s1.length; i++) {
    freq1[s1.charCodeAt(i) - 'a'.charCodeAt()] += 1;
  }
  
  let left = 0;
  let right = s1.length;
  
  while (right < s2.length) {
    if (areArraysEqual(freq1, freq2)) {
      return true;
    }
    
    freq2[s2.charCodeAt(right) - 'a'.charCodeAt()] += 1;
    freq2[s2.charCodeAt(left) - 'a'.charCodeAt()] -= 1;
    
    left += 1;
    right += 1;
  }
  
  return areArraysEqual(freq1, freq2);
}

function areArraysEqual(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  
  return true;
}