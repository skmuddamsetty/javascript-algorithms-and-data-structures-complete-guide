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

    /**
     * Inserts node into the binary tree
     * @param {number} data desired input for the node
     * @param {root} root of the binary tree and by default the root is null
     * @return {root} returns the root of the binary tree
     */
    insert(key, root = null) {
      if (root === null || root === undefined) {
        return new Node(key);
      }
      let queue = [];
      queue.push(root);
      let node = root;
      while (queue.length) {
        node = queue.shift();
        if (node.left) {
          queue.push(node.left);
        } else {
          node.left = new Node(key);
          return root;
        }
        if (node.right) {
          queue.push(node.right);
        } else {
          node.right = new Node(key);
          return root;
        }
      }
    }

    /**
     * Prints the Node's keys at given level
     * @param {number} level at which the nodes are to be printed
     * @param {Node} root of the bianry tree. by default it is initialized to the instance root variable
     * Time Complexity: O(h)
     * Space Complexity: O(1)
     */
    printNodesAtLevel(level, root = this.root) {
      if (root === null || root === undefined) return;
      if (level === 1) {
        console.log(root.key);
        return;
      }
      this.printNodesAtLevel(level - 1, root.left);
      this.printNodesAtLevel(level - 1, root.right);
    }
  }
  /**
   *              ----------1----------
   *             |                     |
   *             2                     3
   *             |                     |
   *          4-----5               6-----7
   *          |
   *       8-----9
   */
  let bt = new BinaryTree();
  bt.root = bt.insert(1);
  bt.root = bt.insert(2, bt.root);
  bt.root = bt.insert(3, bt.root);
  bt.root = bt.insert(4, bt.root);
  bt.root = bt.insert(5, bt.root);
  bt.root = bt.insert(6, bt.root);
  bt.root = bt.insert(7, bt.root);
  bt.root = bt.insert(8, bt.root);
  bt.root = bt.insert(9, bt.root);
  bt.printNodesAtLevel(3);
}
