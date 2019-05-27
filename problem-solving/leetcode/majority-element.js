{
  function majorityElement(arr) {
    // step 1
    let count = 0;
    let candidate;
    for (let num of arr) {
      if (count === 0) {
        candidate = num;
        count = 1;
      } else {
        if (num === candidate) {
          count++;
        } else {
          count--;
        }
      }
    }
    // step 2
    count = 0;
    for (let num of arr) {
      if (num === candidate) {
        count++;
      }
    }
    return count > arr.length / 2 ? candidate : null;
  }

  majorityElement([6, 6, 6, 7, 7]);
}
