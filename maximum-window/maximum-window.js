/*This uses the sliding window problem along with a data structure as a queue. The main tackle is to prevent
using the brute force way which would be O(n^2). The first thing to do is to initialize two pointers with left
and right holding the same amount == k in between them. If the rightmost values are less than the current right
value in the deque, then we would take them out. This ensures that we are not repeating over and over again elements
that we know are not the maximum. Then, we push the right value onto the deque.*/

const getSolution = (array, k) => {
    let deque = [];
    let result = [];
    let left = 0;
    let right = k - 1;

    while(right < array.length){
        while(deque.length > 0 && deque[deque.length - 1] < array[right]){
                deque.pop();
        }
        deque.push(array[right]);
        if(array[left] > deque[0]){
            deque.shift();
        }
        if(right + 1 >= k){
            result.push(deque[0]);
            left++;
        }
        right++;
    }
    return result;
}

let answer = getSolution([1,3,-1,-3,5,3,6,7], 3);