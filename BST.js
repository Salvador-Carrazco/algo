/*
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    let currentNode = this;
    while (true){
      if (value < currentNode.value){
        if (currentNode.left === null){
          currentNode.left = new BST(value)
          break;
        }else{
          currentNode = currentNode.left
        }
        }else{
          if (currentNode.right === null){
            currentNode.right = new BST(value)
            break;
          }else{
            currentNode = currentNode.right
          }
        }
      }
    // Do not edit the return statement of this method.
    return this;
  }

  contains(value) {
    let currentNode = this;
    while(currentNode !== null){
      if(value < currentNode.value){
        currentNode = currentNode.left;
      }else if (value > currentNode.value){
        currentNode = currentNode.right;
      }else{
        return true;
      }
    }
    return false;
  }

  remove(value, parentNode = null) {
    let currentNode = this;

    while(currentNode !== null){
      
      if(value < currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.left;
        
      } else if(value > currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.right;
        
      }else{
        if(currentNode.left !== null && currentNode.right !== null){
          currentNode.value = currentNode.right.getMinValue();
          currentNode.right.remove(currentNode.value, currentNode)
        }else if(parentNode === null){
          if(currentNode.left !== null){
            currentNode.value =  currentNode.left.value;
            currentNode.right = currentNode.left.right;
            currentNode.left = currentNode.left.left;
          } else if(currentNode.right !== null) {
            currentNode.value = currentNode.right.value;
            currentNode.left = currentNode.right.left;
            currentNode.right = currentNode.right.right;
        }
        }else{
            // single node tree do nothing 
        }
        } else if(parentNode.left === currentNode){
          parentNode.left = currentNode.left  !== null ? 
            currentNode.left : currentNode.right;
        } else if (parentNode.right === currentNode){
          parentNode.right = currentNode.left !== null ? 
            currentNode.left : currentNode.right;
        }
        break;
        }
        }
    

getMinValue(){
  let currentNode = this;
  while(currentNode.left !== null){
    currentNode = currentNode.left;
  }
  return currentNode.value
}
}
// Do not edit the line below.
exports.BST = BST;

code is correct but not passing the test cases
have not looked for big O time complexity to see if 
that is the case or if it is a case of space complexity

*/

//added a shuffle methoda and that fixed the issue 
//and this code passed all the test cases


class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
     let currentNode = this;
      while(true) {
        if(value < currentNode.value){
          if(currentNode.left === null){
            currentNode.left = new BST(value);
            break;
          }else {
            currentNode = currentNode.left;
          }
        }else{
          if(currentNode.right === null){
            currentNode.right = new BST(value);
            break;
          }else{
              currentNode = currentNode.right;
          }
        }
      }
      return this;
    }
  
    contains(value) {
     let currentNode = this;
      while( currentNode !== null){
        if (value < currentNode.value){
          currentNode = currentNode.left;
        } else if (value > currentNode.value){
          currentNode = currentNode.right;
        }else{
          return true;
        }
      }
      return false;
    }
  
    remove(value, parentNode = null) {
      let currentNode = this;
  
      while ( currentNode !== null){
        if(value < currentNode.value){
          parentNode =  currentNode;
          currentNode = currentNode.left;
        } else if (value > currentNode.value){
          parentNode = currentNode;
          currentNode = currentNode.right
        }else{
          currentNode.shuffleNodes(currentNode, parentNode);
          break;
        }
      }
      return this;
    }
    shuffleNodes(currentNode, parentNode){
      const leftNodeExists = currentNode.left !== null,
            rightNodeExists = currentNode.right !== null
      if(leftNodeExists && rightNodeExists) {
        currentNode.value = currentNode.right.getMinValue()
        currentNode.right.remove(currentNode.value, currentNode)
      } else if (parentNode === null) {
        if (leftNodeExists){
          currentNode.value = currentNode.left.value;
          currentNode.right = currentNode.left.right;
          currentNode.left = currentNode.left.left;
        }else if(rightNodeExists){
          currentNode.value = currentNode.right.value;
          currentNode.left =  currentNode.right.left;
          currentNode.right = currentNode.right.right;
        }else{
      
        }
      }else if  (parentNode.left === currentNode){
        parentNode.left = leftNodeExists ?
          currentNode.left : currentNode.right
      }else if (parentNode.right === currentNode){
        parentNode.right = leftNodeExists ?
          currentNode.left : currentNode.right;
      }
    }
    getMinValue(){
      let currentNode = this;
      while (currentNode.left !== null){
        currentNode = currentNode.left;
      }
      return currentNode.value;
    }
  }
  
  // Do not edit the line below.
  exports.BST = BST;
  