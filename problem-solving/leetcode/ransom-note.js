{
  function ransomNote(ransomNote, magazine) {
    for (let i = 0; i < ransomNote.length; i++) {
      let index = magazine.indexOf(ransomNote[i]);
      if (index >= 0) {
        magazine = magazine.slice(0, index) + magazine.slice(index + 1);
      } else {
        return false;
      }
    }
    return true;
  }

  ransomNote('bg', 'efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj');
}
