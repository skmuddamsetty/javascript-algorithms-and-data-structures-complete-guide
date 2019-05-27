/**
 * @author: Santhosh Kumar Muddamsetty
 */
{
  /**
   * @this {Node}
   */
  class Node {
    constructor(key) {
      this.key = key;
      this.left = null;
      this.right = null;
    }
  }

  /**
   * @this {BinaryTree}
   */
  class BinaryTree {
    constructor() {
      this.root = null;
    }

    mergeTwoBinaryTrees(root1, root2) {
      if (root1 === null || root2 === null) return 0;
    }
  }

  //   Input:
  // 	Tree 1                     Tree 2
  //           1                         2
  //          / \                       / \
  //         3   2                     1   3
  //        /                           \   \
  //       5                             4   7
  // Output:
  // Merged tree:
  // 	     3
  // 	    / \
  // 	   4   5
  // 	  / \   \
  // 	 5   4   7

  let bt1 = new BinaryTree();
  bt1.root = new Node(1);
  bt1.root.left = new Node(3);
  bt1.root.right = new Node(2);
  bt1.root.left.left = new Node(5);

  let bt2 = new BinaryTree();
  bt2.root = new Node(2);
  bt2.root.left = new Node(1);
  bt2.root.right = new Node(3);
  bt2.root.left.right = new Node(4);
  bt2.root.right.right = new Node(7);
}
