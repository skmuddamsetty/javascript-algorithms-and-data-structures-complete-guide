/**
 * @author: Santhosh Kumar Muddamsetty
 */
{
  /**
   * returns the sorted squares in increasing order
   * @param {Array} A input Array
   * Time Complexity: O(n)
   * Space Complexity: O(1)
   */
  function sortedSquares(A = []) {
    if (!A.length) return A;
    let sortedSquares = [];
    let negative_pointer_end = 0;
    let postive_pointer_start = 0;
    // first find out the last negative number and store the index number in negative_pointer
    while (A[negative_pointer_end] < 0) {
      negative_pointer_end++;
    }
    // correct the end of negative pointer and start of positive pointer
    negative_pointer_end = negative_pointer_end - 1;
    postive_pointer_start = negative_pointer_end + 1;
    while (negative_pointer_end >= 0 && postive_pointer_start <= A.length - 1) {
      if (
        A[negative_pointer_end] * A[negative_pointer_end] <
        A[postive_pointer_start] * A[postive_pointer_start]
      ) {
        sortedSquares.push(A[negative_pointer_end] * A[negative_pointer_end]);
        negative_pointer_end--;
      } else {
        sortedSquares.push(A[postive_pointer_start] * A[postive_pointer_start]);
        postive_pointer_start++;
      }
    }
    while (negative_pointer_end >= 0) {
      sortedSquares.push(A[negative_pointer_end] * A[negative_pointer_end]);
      negative_pointer_end--;
    }
    while (postive_pointer_start <= A.length - 1) {
      sortedSquares.push(A[postive_pointer_start] * A[postive_pointer_start]);
      postive_pointer_start++;
    }
    return sortedSquares;
  }

  sortedSquares([-4, -1, 0, 3, 10]);
}
