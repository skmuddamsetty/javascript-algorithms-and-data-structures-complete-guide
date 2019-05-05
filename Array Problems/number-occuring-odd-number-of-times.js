/**
 * @author: Santhosh Kumar Muddamsetty
 */
{
  /**
   *
   * Algorithm 1:
   *Count the occurrence of each array element and check if it is odd or not. Print the element which has odd occurrence.
   *This algorithm uses two loops and runs in O(n2) time.
   *
   *Algorithm 2:
   *Create a hash map to store the element as key and count of the element as value.
   *Iterate over the array elements. If the array element is not present in the array, then add the element to the map with count = 1. If the array element is already present because of a previous iteration, then update the count of the array by incrementing the count by 1.
   *Finally iterate over the map and print the element which has odd occurrence.
   *This algorithm takes O(n) time and O(n) auxiliary space.
   *
   *Algorithm 3:
   *1. Initialize result = input[0].
   *2. Iterate over the array from i = 1 to length of the array and XOR the result with each element of the input array.
   *3. Once iteration over the array is done, print result as the output.
   */
  /**
   * In an array having positive integers, except for one number which occurs odd number of times, all other numbers occur even number of times. Find the number.
   * Example -
   * Input : 2 5 9 1 5 1 8 2 8
   * Output: 9
   *
   *  Input : 2 3 4 3 1 4 5 1 4 2 5
   *  Output: 4
   * Returns the number which is occuring odd number of times in the array
   * @param {Array} arr input array
   * @returns {Array}
   * Time Complexity: O(n)
   * Space Complexity: O(1)
   */
  function numberOccuringOddNumberOfTimes(arr = []) {
    if (!arr.length) {
      return arr;
    }
    let result = 0;
    for (let num of arr) {
      result = result ^ num;
    }
    return result;
  }

  numberOccuringOddNumberOfTimes([1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4]);
}
