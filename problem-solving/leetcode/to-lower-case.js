/**
 * @author: Santhosh Kumar Muddamsetty
 * Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.
 */
{
  /**
   *
   * @param {string} str
   * Time Complexity: O(n)
   * Space Complexity: O(n)
   */
  function toLowerCase(str = '') {
    const lowerCaseArr = [];
    for (let i = 0; i < str.length; i++) {
      let charCode = str[i].charCodeAt();
      if (64 < charCode && charCode < 91) {
        charCode += 32;
      }
      lowerCaseArr.push(String.fromCharCode(charCode));
    }
    return lowerCaseArr.join('');
  }

  toLowerCase('LEETCODE');
}
