/**
 * @author: Santhosh Kumar Muddamsetty
 */
{
  /**
   *
   * @param {Array} arr input array
   * Time Complexity: O(n)
   * Space Complexity: O(1)
   */
  function leadersInArray(arr = []) {
    if (!arr.length) return null;
    let leaders = [arr[arr.length - 1]];
    let currentLeader = arr[arr.length - 1];
    for (let i = arr.length - 1; i > 0; i--) {
      if (arr[i - 1] > currentLeader) {
        currentLeader = arr[i - 1];
        leaders.push(currentLeader);
      }
    }
    return leaders;
  }

  leadersInArray([98, 23, 54, 12, 20, 7, 27]);
}
