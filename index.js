// function inOrder(currentNode) {
//     if (currentNode.left)  {
//         inOrder(currentNode.left)
//     }

//     console.log(currentNode.data)

//     if (currentNode.right) {
//         inOrder(currentNode.right)
//     }
// }

// function findOrAdd(rootNode, newNode) {
//     let currentNode = rootNode.data
//     if (newNode.data < rootNode.data) {
//         currentNode = rootNode.left
//         if (currentNode) {
//             findOrAdd(currentNode, newNode)
//         } else {
//             currentNode.left = newNode
//         }
//     } else if (newNode.data > rootNode.data) {
//         currentNode = rootNode.right
//         if (currentNode) {
//             findOrAdd(currentNode, newNode)
//         } else {
//             currentNode.left = newNode
//         }   
//     }
// }

// function max(data)  {

// }

// function min(data)  {
    
// }

function max(currentNode){
    if(currentNode.right){
      return max(currentNode.right)
    } else {
      return currentNode;
    }
  }
  
  function min(currentNode){
    if(currentNode.left){
      return min(currentNode.left)
    } else {
      return currentNode;
    }
  }
  
  function inOrder(currentNode){
    if(currentNode.left){
      inOrder(currentNode.left)
    }
    console.log(currentNode.data)
  
    if(currentNode.right){
      inOrder(currentNode.right)
    }
  }
  
  function findOrAdd(currentNode, newNode){
    if(currentNode.data == newNode.data){
      return true
    }
    if(newNode.data < currentNode.data){
      if(currentNode.left){
        return findOrAdd(currentNode.left, newNode)
      } else {
        return currentNode.left = newNode
      }
    }
  
    if(newNode.data > currentNode.data){
      if(currentNode.right){
        return findOrAdd(currentNode.right, newNode)
      } else {
        return currentNode.right = newNode
      }
    }
  }
  