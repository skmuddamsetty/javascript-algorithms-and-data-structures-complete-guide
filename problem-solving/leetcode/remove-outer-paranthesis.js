{
  /**
   * Input: "(()())(())"
   * Output: "()()()"
   * Explanation:
   * The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
   * After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
   *
   * Input: "(()())(())(()(()))"
   * Output: "()()()()(())"
   * Explanation:
   * The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
   * After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
   * removes outer paranthesis
   *
   * Input: "()()"
   * Output: ""
   * Explanation:
   * The input string is "()()", with primitive decomposition "()" + "()".
   * After removing outer parentheses of each part, this is "" + "" = "".
   * @param {string} str
   * Time complexity: O(n)
   * Space Complexity: O(1)
   * https://leetcode.com/problems/remove-outermost-parentheses/
   */
  function removeOuterParanthesis(str = '') {
    if (!str.length) return '';
    let length = 0;
    let start = 0;
    let tempStr = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '(') {
        length++;
      } else {
        length--;
      }
      if (length === 0) {
        tempStr = tempStr + str.slice(start + 1, i);
        start = i + 1;
      }
    }
    return tempStr;
  }

  removeOuterParanthesis('(()())(())(()(()))');
}
