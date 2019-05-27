{
  function reverseString(s) {
    let arr = s.split(' ');
    let stack = [];
    let finalStr = '';
    for (let word of arr) {
      for (let char of word) {
        stack.push(char);
      }
      while (stack.length) {
        finalStr = finalStr + stack.pop();
      }
      finalStr = finalStr + ' ';
    }
    return finalStr.trim();
  }

  function reverseString2(s) {
    let stack = [];
    let finalStr = '';
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== ' ') {
        stack.push(s[i]);
      } else {
        while (stack.length) {
          finalStr = finalStr + stack.pop();
        }
        finalStr = finalStr + ' ';
      }
    }
    while (stack.length) {
      finalStr = finalStr + stack.pop();
    }
    finalStr = finalStr + ' ';
    return finalStr.trim();
  }

  reverseWords("Let's take LeetCode contest");
}
