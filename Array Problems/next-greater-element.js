/**
 * @author: Santhosh Kumar Muddamsetty
 */
{
  /**
   * Algorithm 1 (Naive): For every element,
   * iterate over array elements on the
   * right to find the first element which is greater than the current element.
   * If the end of array is reached, then next greater element
   * for the current element is null.
   * Time Complexity: O(n^2)
   * Space Complexity: O(1)
   *
   * Algorithm 2 (Optimized):
   * Traverse the array once.
   * 1: If the stack is empty or array[i] is less than stack.top,
   * push the array[i] on the stack.
   * 2: While array[i] is greater than stack.top,
   * Pop top element & print 'Next Greater Element of top is array[i]'.
   * 3: Push array[i] on the stack.
   * 4: Repeat steps 2-3 till the end of array is reached.
   * 5: Finally, print null as next greater element
   * for all remaining stack elements.
   * @param {Array} arr input array
   * Time Complexity: O(n)
   * Space Complexity: O(n)
   */
  function nextGreaterElement(arr = []) {
    if (!arr.length) return null;
    let stack = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > stack[stack.length - 1]) {
        while (stack.length && arr[i] > stack[stack.length - 1]) {
          console.log(
            'next greater element for-->' +
              stack[stack.length - 1] +
              '-->is-->' +
              arr[i]
          );
          stack.pop();
        }
      }
      stack.push(arr[i]);
    }
    while (stack.length) {
      console.log(
        'next greater element for-->' + stack.pop() + '-->is--> null'
      );
    }
  }

  nextGreaterElement([98, 23, 54, 12, 20, 7, 27]);
}
