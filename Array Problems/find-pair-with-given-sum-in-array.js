/**
 * @author: Santhosh Kumar Muddamsetty
 */
{
  /**
   * Given an unsorted array of integers, find a pair with given sum in it.
   * @param {Array} arr input array
   * @param {sum} sum to be found
   *
   * Time Complexity: O(n)
   * Space Complexity: O(n)
   */
  function findPairWithGivenSum(arr = [], sum) {
    if (!arr.length) {
      console.log('No pair found');
      return;
    }
    let map = {};
    for (let i = 0; i < arr.length; i++) {
      if (map[sum - arr[i]] !== undefined) {
        console.log('pair found at indexes', map[sum - arr[i]], i);
      } else {
        map.put(arr[i], i);
      }
    }
  }

  findPairWithGivenSum([1, 2, 3, 4, 1], 2);
}
