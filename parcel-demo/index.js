
class CreateNode {
  constructor(key) {
    this.value = key
    this.left = null
    this.right = null
  }
}

class CreateNodeTree {
  constructor() {
    this.nodeRoot = null
  }
  insertNode(key) {
    const tempNode = new CreateNode(key)
    if (this.nodeRoot === null) {
      this.nodeRoot = tempNode
    } else {
      const insert = function(root, curNode) {
        if (root.value > curNode.value) { // 左
          if (root.left === null) {
            root.left = curNode
          } else {
            insert(root.left, curNode)
          }
        } else { // 右
          if (root.right === null) {
            root.right = curNode
          } else {
            insert(root.right, curNode)
          }
        }
      }
      insert(this.nodeRoot, tempNode)
    }
  }
  firstTraverse() {
    let arr = []
    const traverse = function(root) {
      if (root !== null) {
        arr.push(root.value)
        traverse(root.left)
        traverse(root.right)
      }
    }
    traverse(this.nodeRoot)
    return arr
  }
  revertTree() {
    
  }
}

export default CreateNodeTree