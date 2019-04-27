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
   * @this {BinarySearchTree}
   */
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }

    /**
     * Inserts the node in the proper position based on the key
     * @param {number} key of the node
     * @param {root} root of the binary tree and by default the root is null
     * @return {root} returns the root of the binary tree
     * Time Complexity: O(logn)
     * Space Complexity: O(n)
     */
    insert(key, root = null) {
      if (root === null || root === undefined) {
        return new Node(key);
      }
      if (key < root.key) {
        root.left = this.insert(key, root.left);
      } else {
        root.right = this.insert(key, root.right);
      }
      return root;
    }

    /**
     * Searches for the given key and returns true if the key is found, else returns false
     * @param {number} key that needs to searched
     * @param {Node} root of the binary tree
     * @returns {boolean} true if the key is found, else false
     * Time Complexity: O(logn)
     * Space Complexity: O(1)
     */
    searchKey(key, root) {
      if (root === null || root === undefined) return false;
      if (key === root.key) {
        return true;
      }
      if (key < root.key) {
        return this.searchKey(key, root.left);
      }
      if (key > root.key) {
        return this.searchKey(key, root.right);
      }
    }

    /**
     * Constructs a Balanced Binary Search Tree from given sorted Array
     * @param {Array} arr sorted array in Ascending order
     * @param {number} start is by default zero
     * @param {number} end Array.length - 1 by default
     * Time Complexity: O(n)
     */
    constructBalancedBST(arr, start = 0, end = arr.length - 1) {
      if (start > end) return null;
      let mid = Math.floor((start + end) / 2);
      let root = new Node(arr[mid]);
      root.left = this.constructBalancedBST(arr, start, mid - 1);
      root.right = this.constructBalancedBST(arr, mid + 1, end);
      return root;
    }

    /**
     *
     * @param {Node} node
     * @return {Node} in order successor of the node
     * i.e. minimum element from the right sub tree of the given node
     */
    getMinimumElementInRightSubTreeOfNode(node) {
      if (node === null || node === undefined) return node;
      let tempNode = node.right;
      while (tempNode.left) {
        tempNode = tempNode.left;
      }
      return tempNode;
    }

    /**
     *
     * @param {Node} node
     * @return {Node} in order pre decessor of the node
     * i.e. maximum element from the left sub tree of the given node
     */
    getMaximumElementInLeftSubTreeOfNode(node) {
      if (node === null || node === undefined) return node;
      let tempNode = node.left;
      while (tempNode.right) {
        tempNode = tempNode.right;
      }
      return tempNode;
    }

    /**
     *
     * @param {Node} node
     * @return {Node} in order pre decessor of the node
     * i.e. maximum element from the right sub tree of the given node
     */
    getMaximumElementInRightSubTreeOfNode(node) {
      while (node && node.right) {
        node = node.right;
      }
      return node;
    }

    /**
     * gets the inorder successor of the given key
     * @param {Node} root of the binary tree
     * @param {Number} key of the node
     * @return {Node} in order successor of the given key
     * Time Complexity: O(logn)
     * Space Complexity: O(1)
     */
    getInOrderSuccessor(root, key) {
      if (root === null || root === undefined) return null;
      let inOrderSuccessor;
      while (root !== null) {
        if (key < root.key) {
          inOrderSuccessor = root;
          root = root.left;
        } else if (key > root.key) {
          root = root.right;
        } else {
          if (root.right) {
            inOrderSuccessor = this.getMinimumElementInRightSubTreeOfNode(root);
          }
          break;
        }
      }
      return inOrderSuccessor;
    }

    /**
     * gets the inorder pre decessor of the given key
     * @param {Node} root of the binary tree
     * @param {Number} key of the node
     * @return {Node} in order pre decessor of the given key
     * Time Complexity: O(logn)
     * Space Complexity: O(1)
     */
    getInOrderPreDecessor(root, key) {
      if (root === null || root === undefined) return null;
      let inOrderPreDecessor;
      while (root !== null) {
        if (key < root.key) {
          root = root.left;
        } else if (key > root.key) {
          inOrderSuccessor = root;
          root = root.right;
        } else {
          if (root.left) {
            inOrderPreDecessor = this.getMaximumElementInLeftSubTreeOfNode(
              root
            );
          }
          break;
        }
      }
      return inOrderPreDecessor;
    }

    /**
     * Deletes the node in the binary tree
     * @param {Node} root of the binary tree
     * @param {Number} key the node with key that needs to be deleted
     * @return {Node} root updated binary tree after deleting the node
     */
    deleteNode(root, key) {
      if (root === null || root === undefined) return root;
      if (key < root.key) {
        root.left = this.deleteNode(root.left, key);
      } else if (key > root.key) {
        root.right = this.deleteNode(root.right, key);
      } else {
        if (root.left && root.right) {
          let maxNode = this.getMaximumElementInRightSubTreeOfNode(root);
          root.key = maxNode.key;
          root.right = this.deleteNode(root.right, maxNode.key);
        } else {
          return root.left ? root.left : root.right;
        }
      }
      return root;
    }
  }

  /**
   *                        10
   *                  5           15
   *              3       8   12       20
   *                    6  9    13
   *                              14
   */
  let bst = new BinarySearchTree();
  bst.root = bst.insert(10);
  bst.insert(5, bst.root);
  bst.insert(15, bst.root);
  bst.insert(3, bst.root);
  bst.insert(8, bst.root);
  bst.insert(12, bst.root);
  bst.insert(20, bst.root);
  bst.insert(6, bst.root);
  bst.insert(9, bst.root);
  bst.insert(13, bst.root);
  bst.insert(14, bst.root);
  bst.deleteNode(bst.root, 9);
}
