/**
 * @author: Santhosh Kumar Muddamsetty
 */
{
  /**
   * Finds if the string has duplicate paranthesis or not
   * Below expressions have duplicate parenthesis -
   * ((a+b)+((c+d)))
   * The subexpression "c+d" is surrounded by two
   * pairs of brackets.
   *
   * (((a+(b)))+(c+d))
   * The subexpression "a+(b)" is surrounded by two
   * pairs of brackets.
   *
   * (((a+(b))+c+d))
   * The whole expression is surrounded by two
   * pairs of brackets.
   *
   * Below expressions don't have any duplicate parenthesis -
   * ((a+b)+(c+d))
   * No subsexpression is surrounded by duplicate
   * brackets.
   *
   * ((a+(b))+(c+d))
   * No subsexpression is surrounded by duplicate
   * brackets.
   * @param {string} str input string
   * @returns {boolean} true if the expression has duplicate paranthesis, else false
   * Time Complexity: O(n)
   * Space Complexity: O(n)
   */
  function findDuplicateParanthesis(str = '') {
    if (!str.length) {
      return false;
    }
    let stack = [];
    for (let char of str) {
      if (char !== ')') {
        stack.push(char);
      } else {
        let top;
        if (stack.length) {
          top = stack.pop();
          if (top === '(') return true;
          while (top && top !== '(') {
            top = stack.pop();
          }
          if (stack.length) {
            stack.pop();
          }
        }
      }
    }
    return false;
  }

  /**
   * Method 2 to find dup paranthesis
   * @param {string} str input str
   * @returns {boolean} true if dup paranthesis present, else false
   */
  function findDupParanthesis(str) {
    let stack = [];
    for (let char of str) {
      let elemCount = 0;
      if (char !== ')') {
        stack.push(char);
      } else {
        if (stack.length) {
          while (stack.length && stack[stack.length - 1] !== '(') {
            elemCount++;
            stack.pop();
          }
          if (elemCount < 1) {
            return true;
          }
          stack.pop(); // this pop is to remove the matching opening brace for the current processing closing brace
        }
      }
    }
    return false;
  }

  findDupParanthesis('((a+(b))+(c+d))');

  findDuplicateParanthesis('(a)');
}
