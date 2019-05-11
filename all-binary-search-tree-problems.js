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

    /**********************************HELPER METHODS************************/
    /**
     * this merges the individually sorted arrays
     * @param {Array} arr1 sorted array 1
     * @param {Array} arr2 sorted array 2
     */
    merge(arr1, arr2) {
      let results = [];
      let i = 0;
      let j = 0;
      while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
          results.push(arr1[i]);
          i++;
        } else if (arr1[i] > arr2[j]) {
          results.push(arr2[j]);
          j++;
        }
      }
      while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
      }
      while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
      }
      return results;
    }

    /**
     * initiates the merge sort, divides the single array into multiple single arrays
     * and merges them back
     * @param {Array} arr that needs to be sorted
     * @returns {Array} an array which is sorted
     */
    mergeSort(arr) {
      if (arr.length === 1) {
        return arr;
      }
      let mid = Math.floor(arr.length / 2);
      let left = this.mergeSort(arr.slice(0, mid));
      let right = this.mergeSort(arr.slice(mid));
      return this.merge(left, right);
    }
    /**********************************HELPER METHODS************************/

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

    /**
     * Determines if the binary tree is a binary search tree or not
     * @param {Node} root of the binary tree
     * @return {Boolean} returns true if the binary search tree is true, else false
     * Time Complexity: O(h)
     * Space Complexity: O(1)
     */
    isBST(root) {
      if (root === null || root === undefined) return true;
      if (
        (root.left && root.key < root.left.key) ||
        (root.right && root.key > root.right.key)
      )
        return false;
      return this.isBST(root.left) && this.isBST(root.right);
    }

    printAllPathsFromRootToLeaf(root = this.root, queue = []) {
      if (root === null || root === undefined) return null;
      queue.push(root.key);
      this.printAllPathsFromRootToLeaf(root.left, queue);
      if (root.left === null && root.right === null) {
        // print elements in the queue
        let path = '';
        for (let i = 0; i < queue.length; i++) {
          path = path + '-->' + queue[i];
        }
        console.log(path);
      }
      this.printAllPathsFromRootToLeaf(root.right, queue);
      queue.pop();
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

    /**
     * returns the vertical order map of the given binary tree
     * @param {Node} root of the binary tree
     * Use level order traversal and hashmap
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    horizontalOrderOfBinaryTree(root = this.root) {
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
          node.left.hd = currHd + 1;
          queue.push(node.left);
        }
        if (node.right) {
          node.right.hd = currHd + 1;
          queue.push(node.right);
        }
      }
      return obj;
    }

    /**
     * returns an array of the top view of binary tree
     * @param {Node} root of the binary tree
     * @returns {Array} arr top view of binary tree
     * Time complexity: O(nlogn)
     * Space Complexity: O(n)
     */
    topViewOfBinaryTree(root = this.root) {
      if (root === null || root === undefined) return null;
      let arr = [];
      let obj = this.verticalOrderOfBinaryTree(root);
      let keys = Object.keys(obj).map(key => {
        return Number(key);
      });
      let sortedKeys = this.mergeSort(keys);
      for (let key of sortedKeys) {
        arr.push(obj[key][0]);
      }
      return arr;
    }

    /**
     * returns an array of the bottom view of binary tree
     * @param {Node} root of the binary tree
     * @returns {Array} arr bottom view of binary tree
     * Time complexity: O(nlogn)
     * Space Complexity: O(n)
     */
    bottomViewOfBinaryTree(root = this.root) {
      if (root === null || root === undefined) return null;
      let arr = [];
      let obj = this.verticalOrderOfBinaryTree(root);
      let keys = Object.keys(obj).map(key => {
        return Number(key);
      });
      let sortedKeys = this.mergeSort(keys);
      for (let key of sortedKeys) {
        let lastIndex = obj[key].length - 1;
        arr.push(obj[key][lastIndex]);
      }
      return arr;
    }

    /**
     * returns an array of the left view of binary tree
     * @param {Node} root of the binary tree
     * @returns {Array} arr left view of binary tree
     * Time complexity: O(n)
     * Space Complexity: O(n)
     */
    leftViewOfBinaryTree(root = this.root) {
      if (root === null || root === undefined) return null;
      let arr = [];
      let obj = this.horizontalOrderOfBinaryTree(root);
      for (let key of Object.keys(obj)) {
        arr.push(obj[key][0]);
      }
      return arr;
    }

    /**
     * returns an array of the right view of binary tree
     * @param {Node} root of the binary tree
     * @returns {Array} arr right view of binary tree
     * Time complexity: O(n)
     * Space Complexity: O(n)
     */
    rightViewOfBinaryTree(root = this.root) {
      if (root === null || root === undefined) return null;
      let arr = [];
      let obj = this.horizontalOrderOfBinaryTree(root);
      for (let key of Object.keys(obj)) {
        let lastIndex = obj[key].length - 1;
        arr.push(obj[key][lastIndex]);
      }
      return arr;
    }

    /**
     * Given the root node of a binary search tree,
     * return the sum of values of all nodes with value
     * between L and R (inclusive).
     * @param {Node} root of the binary searcg tree
     * @param {number} minimum
     * @param {number} maximum
     * Time Complexity: O(n),where n is the number of nodes in the tree.
     * Space Complexity: O(1)
     */
    rangeSumBST(root = this.root, minimum, maximum) {
      let sum = 0;
      if (root === null || root === undefined) return 0;
      if (root.key >= minimum && root.key <= maximum) {
        sum = root.key;
      }
      if (minimum <= root.key || maximum <= root.key) {
        sum = sum + this.rangeSumBST(root.left, minimum, maximum);
      }
      if (root.key <= minimum || root.key <= maximum) {
        sum = sum + this.rangeSumBST(root.right, minimum, maximum);
      }
      return sum;
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
  bst.isBST(bst.root);
  bst.rangeSumBST(bt.root, 5, 15);
}
