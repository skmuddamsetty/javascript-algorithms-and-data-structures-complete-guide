/**
 * @author: Santhosh Kumar Muddamsetty
 */
{
  /**
   * Removes the duplicates in the array using extra space
   * @param {Array} arr input array
   * @returns {Array}
   * Time Complxity: O(n)
   * Space Complexity: O(n)
   */
  function removeDuplicatesFromSortedArray(arr = []) {
    if (!arr.length) {
      return arr;
    }
    let distinctArr = [];
    let j = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] !== arr[i + 1]) {
        distinctArr[j] = arr[i];
        j++;
      }
      distinctArr[j] = arr[arr.length - 1];
    }
    return distinctArr;
  }

  removeDuplicatesFromSortedArray([1, 2, 2, 3, 3, 3]);
}
