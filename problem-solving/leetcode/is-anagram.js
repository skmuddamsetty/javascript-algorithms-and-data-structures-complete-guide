{
  function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    let obj1 = {};
    let obj2 = {};
    for (let i = 0; i < s.length; i++) {
      if (obj1[s[i]]) {
        obj1[s[i]] = obj1[s[i]] + 1;
      } else {
        obj1[s[i]] = 1;
      }
      if (obj2[t[i]]) {
        obj2[t[i]] = obj2[t[i]] + 1;
      } else {
        obj2[t[i]] = 1;
      }
    }
    return Object.keys(obj1).every(key => obj1[key] === obj2[key]);
  }

  isAnagram('a', 'ab');
}
