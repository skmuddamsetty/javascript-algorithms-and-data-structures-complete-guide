/**
 * @author: Santhosh Kumar Muddamsetty
 */
{
  /**
   *
   * Algorithm 1:
   *1. Iterate over array1, find sum of all numbers of array1, say result.
   *2. Iterate over array2 and subtract every element of array2 from result.
   *3. Print result.
   *Typically in an interview, there can be a follow-up question to solve this problem without using arithmetic operators. Following is the algorithm for the same.
   *
   *Algorithm 2:
   *1. Initialize result = 0.
   *2. Iterate over both the input arrays and XOR 'result' with each element of the input arrays.
   *3. Print result.
   */
  /**
   * Given two integer arrays where second array is duplicate of first array with just 1 element missing. Find the element.
   *Example:
   *
   *Input:
   *Array1 - 9 7 8 5 4 6 2 3 1
   *Array2 - 2 4 3 9 1 8 5 6
   *
   *Output:
   *7
   * Returns the number which is occuring odd number of times in the array
   * @param {Array} arr input array
   * @returns {Array}
   * Time Complxity: O(n)
   * Space Complexity: O(1)
   */
  function numberMissinginDupArray(arr1 = [], arr2 = []) {
    if (!arr1.length && !arr2.length) {
      return null;
    }
    let result = 0;
    for (let num of arr1) {
      result = result ^ num;
    }
    for (let num of arr2) {
      result = result ^ num;
    }
    return result;
  }

  numberMissinginDupArray(
    [1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4],
    [1, 1, 2, 2, 3, 3, 3, 4, 4, 4]
  );
}
