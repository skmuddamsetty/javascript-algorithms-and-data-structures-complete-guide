/**
 * @author: Santhosh Kumar Muddamsetty
 */
{
  /**
   * Given a sorted array of integers containing duplicates,
   * write a program which returns the last index of an element.
   * Returns the last index of the num in the array, if num is not present,
   * this returns -1
   * @param {Array} arr input sorted array
   * @param {number} num to be searched
   * @returns {number} last index of the num in the array
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
  function searchElementAndReturnLastIndex(arr = [], num) {
    let index = this.searchHelper(arr, num);
    // after the index is found looping through the array untill the next greater element
    while (index < arr.length - 1 && arr[index] === arr[index + 1]) {
      index = index + 1;
    }
    return index;
  }

  /**
   * Returns the first found index of the element we are searching for
   * @param {Array} arr input sorted array
   * @param {number} num to be searched
   * @param {number} start defaulted to 0
   * @param {number} end defaulted to length of array minus one
   * @returns {number} first found index of the num in the array
   */
  function searchHelper(arr, num, start = 0, end = arr.length - 1) {
    if (!arr.length || start > end) {
      return -1;
    }
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === num) {
      return mid;
    }
    if (num > arr[mid]) {
      return this.searchHelper(arr, num, mid + 1, end);
    } else {
      return this.searchHelper(arr, num, start, mid - 1);
    }
  }

  searchElementAndReturnLastIndex([0, 1, 2, 2, 4, 5, 5, 5, 5], 5);
}
