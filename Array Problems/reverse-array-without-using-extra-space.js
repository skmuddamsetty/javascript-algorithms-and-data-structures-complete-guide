/**
 * @author: Santhosh Kumar Muddamsetty
 */
{
  /**
   * Reverses the array without using extra space
   * @param {Array} arr input array
   * @returns {Array} reversed array
   */
  function reverseArray(arr = []) {
    if (!arr.length) {
      return arr;
    }
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
      swap(arr, start, end);
      start++;
      end--;
    }
    return arr;
  }

  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  reverseArray([2, 3]);
}
