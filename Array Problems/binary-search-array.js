/**
 * @author: Santhosh Kumar Muddamsetty
 */
{
  /**
   * Returns the index of the num in the array, if num is not present,
   * this returns -1
   * @param {Array} arr input sorted array
   * @param {number} num to be searched
   * @param {number} start defaulted to 0
   * @param {number} end defaulted to length of array minus one
   * Binary search algorithm is used for solving many programming interview problems.
   * This algorithm is based on divide and conquer strategy to find a number in a sorted integer array.
   * Binary Search:
   * 1. Take start = 0, end = length of array - 1.
   * 2. Repeat following steps till start <= end:
   *   a). Set mid = (start + end)/2.
   *   b). Check if array[mid] == num, then return mid.
   *   c). If num < array[mid], set end = mid - 1
   *   d). Else set start = mid+1
   * 3. Return -1.
   * Time Complexity: O(logn)
   * Space Complexity: O(1)
   */
  function binarySearch(arr = [], num, start = 0, end = arr.length - 1) {
    if (!arr.length || start > end) {
      return -1;
    }
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === num) {
      return mid;
    }
    if (num > arr[mid]) {
      return this.binarySearch(arr, num, mid + 1, end);
    } else {
      return this.binarySearch(arr, num, start, mid - 1);
    }
  }

  binarySearch([1, 2, 3, 4, 5], 2);
}
