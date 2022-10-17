const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');


class BinarySearchTree {
  constructor()
    {         
      this.rootBt = null;
    }

  root() {
    
    let rootBt = this.rootBt;
    return rootBt;
    
  }

  add(data) {
    this.rootBt = addWithin(this.rootBt, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }

      return node;
    }
  }
  

  has(data) {
    return searchWithin(this.rootBt, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ? 
        searchWithin(node.left, data) :
        searchWithin(node.right, data);
    }
  }

  find(data) {
    
    function searchWithin(node, data) {
      if (node === null) {
        return null;
      }
      else if (data < node.data) {
        return searchWithin(node.left, data)
      }
      else if (data > node.data) {
        return searchWithin(node.right, data)
      }
      else
      return node
    }
    return searchWithin(this.rootBt, data)
  }


  remove(data) {
    this.rootBt = removeNode(this.rootBt, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        
        if (!node.left && !node.right) {
          
          return null;
        }

        if (!node.left) {
          
          node = node.right;
          return node;
        }

        if (!node.right) {
         
          node = node.left;
          return node;
        }

        
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.rootBt) {
      return;
    }

    let node = this.rootBt;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.rootBt) {
      return;
    }

    let node = this.rootBt;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }

}

module.exports = {
  BinarySearchTree
};