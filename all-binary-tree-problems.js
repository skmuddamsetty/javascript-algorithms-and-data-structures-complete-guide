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

    /**
     * prints the node keys in pre order of the binary tree using iterative
     * hint: use one stack - process the node and then push right node first
     * and then left node next so that while popping elements the left node
     * will be the first element to be popped out from the stack.
     * Time Complexity: O(n) - because each is traversed once
     * Space Complexity: O(n) - as space required is proportional to the height of the tree
     * which can be equal to number of nodes in the tree in worst case for skewed trees.
     * @param {root} root of the binary tree
     */
    preOrderTraversalIterative(root = this.root) {
      let stack = [];
      let node;
      let preOrderStr = '';
      stack.push(root);
      while (stack.length) {
        node = stack.pop();
        preOrderStr = preOrderStr + '-->' + node.key;
        if (node.right) {
          stack.push(node.right);
        }
        if (node.left) {
          stack.push(node.left);
        }
      }
      return preOrderStr;
    }

    /**
     * Prints the node keys in pre order of the binary tree using recursion
     * @param {root} root of the binary tree
     * Time Complexity: O(n) - because each is traversed once
     * Space Complexity: O(1)
     */
    preOrderTraversalRecursive(root = this.root) {
      if (root === null || root === undefined) return; // this is the base case
      console.log('Processed Node with Key-->' + root.key);
      this.preOrderTraversalRecursive(root.left);
      this.preOrderTraversalRecursive(root.right);
    }

    /**
     * prints the keys in post order of the binary tree using iterative
     * hint: use two stacks - push into stack 1, pop from stack 1 and then push into stack2
     * Time Complexity: O(n) - because each is traversed once
     * Space Complexity: O(n) - as space required is proportional to the
     * height of the tree which can be equal to number of nodes in the tree
     * in worst case for skewed trees.
     * @param {root} root of the binary tree
     */
    postOrderTraversalIterative(root = this.root) {
      let stack1 = [];
      let stack2 = [];
      let node;
      let postOrderStr = '';
      stack1.push(root);
      while (stack1.length) {
        node = stack1.pop();
        stack2.push(node.key);
        if (node.left) {
          stack1.push(node.left);
        }
        if (node.right) {
          stack1.push(node.right);
        }
      }
      while (stack2.length) {
        postOrderStr = postOrderStr + '-->' + stack2.pop();
      }
      return postOrderStr;
    }

    /**
     * Prints the keys in post order of the binary tree using recursion
     * @param {root} root of the binary tree
     */
    postOrderTraversalRecursive(root = this.root) {
      if (root === null || root === undefined) return; // this is the base case
      this.postOrderTraversalRecursive(root.left);
      this.postOrderTraversalRecursive(root.right);
      console.log('Processed Node with Key-->' + root.key);
    }

    /**
     * calculates the height of binary tree.
     * Height of binary tree is maximum number of edges from root
     * @param {root} root of the binary tree
     * @returns {number} height of binary tree
     */
    heightOfBinaryTreeRecursively(root = this.root) {
      if (root === null || root === undefined) return -1;
      return (
        1 +
        Math.max(
          this.heightOfBinaryTreeRecursively(root.left),
          this.heightOfBinaryTreeRecursively(root.right)
        )
      );
    }

    /**
     * calculates the height of binary tree iteratively
     * Height of binary tree is maximum number of edges from root
     * Since this is iterative process we use level order traversal
     * (BFS using queue) and increment the height only once a level is processed.
     * @param {root} root of the binary tree
     * @returns {number} height of binary tree
     */
    heightOfBinaryTreeIteratively(root = this.root) {
      if (root === null || root === undefined) return -1;
      let queue = [root];
      let height = -1;
      let node;
      let length;
      while (queue.length) {
        length = queue.length;
        while (length > 0) {
          node = queue.shift();
          if (node.left) {
            queue.push(node.left);
          }
          if (node.right) {
            queue.push(node.right);
          }
          length--;
        }
        height++;
      }
      return height;
    }

    /**
     * Prints all the paths from root to each leaf node
     * @param {Node} root of the binary tree
     * @param {Array} stack by default stack is empty
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    printAllPathsFromRootToLeafNodes(root = this.root, stack = []) {
      if (root === null || root === undefined) return null;
      stack.push(root.key);
      this.printAllPathsFromRootToLeafNodes(root.left, stack);
      if (root.left === null && root.right === null) {
        let stackLength = 0;
        let path = '';
        while (stackLength < stack.length) {
          path = path + '-->' + stack[stackLength];
          stackLength++;
        }
        console.log(path);
      }
      this.printAllPathsFromRootToLeafNodes(root.right, stack);
      stack.pop();
    }

    /**
     * returns the vertical order map of the given binary tree
     * @param {Node} root of the binary tree
     * Use level order traversal and hashmap
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    verticalOrderOfBinaryTree(root = this.root) {
      if (root === null || root === undefined) return null;
      root.hd = 0;
      let queue = [root];
      let node;
      let obj = {};
      let currHd = 0;
      while (queue.length) {
        node = queue.shift();
        currHd = node.hd;
        if (obj[currHd] !== undefined) {
          obj[currHd].push(node.key);
        } else {
          obj[currHd] = [node.key];
        }
        if (node.left) {
          node.left.hd = currHd - 1;
          queue.push(node.left);
        }
        if (node.right) {
          node.right.hd = currHd + 1;
          queue.push(node.right);
        }
      }
      return obj;
    }
  }

  //       1
  //     /  \
  //    2    3
  //   / \   / \
  //  4   5  6  7
  // / \
  //8  9

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
  bt.verticalOrderOfBinaryTree();

  /**
   * One more custom binary tree
   *              1
   *          2       3
   *       4    5
   *     6       7
   */
  //   let cbt = new BinaryTree();
  //   cbt.root = new Node(1);
  //   cbt.root.left = new Node(2);
  //   cbt.root.right = new Node(3);
  //   cbt.root.left.left = new Node(4);
  //   cbt.root.left.right = new Node(5);
  //   cbt.root.left.left.left = new Node(6);
  //   cbt.root.left.right.right = new Node(7);
}
