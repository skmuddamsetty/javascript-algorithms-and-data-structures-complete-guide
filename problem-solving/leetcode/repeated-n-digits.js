/**
 * @author: Santhosh KUmar Muddamsetty
 */
{
  /**
   * Returns the elements that is repeated in the input array
   * @param {Array} A
   * Time Complexity: O(n)
   * Space Complexity: O(n)
   */
  function repeatedNTimes(A) {
    let map = {};
    for (let num of A) {
      if (map[num]) {
        map[num] = map[num] + 1;
        if (map[num] > 1) {
          return num;
        }
      } else {
        map[num] = 1;
      }
    }
  }
  repeatedNTimes([1, 2, 3, 3]);
}
