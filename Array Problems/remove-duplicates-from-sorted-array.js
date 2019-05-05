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

  /**
   * Removes the duplicates in the array without using extra space
   * @param {Array} arr input array
   * @returns {Array}
   * Time Complexity: O(n)
   * Space Complexity: O(1)
   */
  function removeDuplicatesFromSortedArrayWithoutExtraSpace(arr = []) {
    let j = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] !== arr[i + 1]) {
        j = j + 1;
        arr[j] = arr[i + 1];
      }
    }
    j = j + 1;
    while (j < arr.length) {
      arr[j] = null;
      j++;
    }
    return arr;
  }

  removeDuplicatesFromSortedArrayWithoutExtraSpace([
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4
  ]);

  removeDuplicatesFromSortedArray([1, 2, 2, 3, 3, 3]);
}
