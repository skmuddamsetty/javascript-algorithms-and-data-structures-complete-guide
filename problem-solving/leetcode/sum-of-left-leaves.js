{
  function sumOfLeftLeaves(root) {
    let queue = [];
    queue.push(root);
    let sum = 0;
    while (queue.length) {
      let node = queue.shift();
      if (node && node.left) {
        if (!node.left.left && !node.left.right) {
          sum = sum + node.left.val;
        }
        queue.push(node.left);
      }
      if (node && node.right) {
        queue.push(node.right);
      }
    }
    return sum;
  }

  var sumOfLeftLeaves = function(root) {
    var sum = 0;

    return sumOfLeftLeavesHelper(root);
    function sumOfLeftLeavesHelper(root) {
      if (root != null) {
        if (
          root.left != null &&
          root.left.left == null &&
          root.left.right == null
        ) {
          sum += root.left.val;
        }
        sumOfLeftLeavesHelper(root.left);
        sumOfLeftLeavesHelper(root.right);
      }
      return sum;
    }
  };

  sumOfLeftLeaves(root);
}
