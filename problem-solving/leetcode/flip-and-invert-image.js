{
  /**
   * Given a binary matrix A, we want to flip the image horizontally,
   * then invert it, and return the resulting image.
   *
   * To flip an image horizontally means that each row of the image is reversed.
   * For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].
   *
   * To invert an image means that each 0 is replaced by 1,
   * and each 1 is replaced by 0. For example, inverting [0, 1, 1]
   * results in [1, 0, 0].
   *
   * Input: [[1,1,0],[1,0,1],[0,0,0]]
   * Output: [[1,0,0],[0,1,0],[1,1,1]]
   * Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
   * Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
   * Input: [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
   * Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
   * Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
   * Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
   * @param {Array} A input array
   * Time Complexity: O(N), where N is the total number of elements in A.
   * Space Complexity: O(1) in additional space complexity.
   */
  function flipAndInvertImage(A) {
    for (let arr of A) {
      let i = 0;
      let j = arr.length - 1;
      while (i <= j) {
        if (arr[i] === arr[j]) {
          if (arr[i] === 0) {
            arr[i] = 1;
            arr[j] = 1;
          } else {
            arr[i] = 0;
            arr[j] = 0;
          }
        }
        i++;
        j--;
      }
    }
    return A;
  }
  flipAndInvertImage([[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]]);
}
