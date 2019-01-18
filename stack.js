//Creates a node containing the data and a reference to the next item
class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(data) {
    //if the top of the stack is empty, then the data will be the
    //top of the stack
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    //if the top already has something then create a new node
    //add data to the new node
    // have the pointer point to the top
    const node = new _Node(data, this.top);
    this.top = node;
  }
  pop() {
    //in order to remove the top of the stack, you have to point
    //the pointer to the next item and that next item becomes the
    //top of the stack
    const node = this.top;
    this.top = node.next;
    return node.data;
  }

  //allows you to look at the top of the stack without removing it
  peek() {
    return this.top;
  }
  //to display the stack. What is the first item in your stack?
  display() {
    if (this.top !== null) {
      let currNode = this.top;
      while (currNode !== null) {
        console.log(currNode.data);
        currNode = currNode.next;
      }
    }
  }
}

const newStack = new Stack();

newStack.push(1);
newStack.push(2);
newStack.push(3);
newStack.push(4);
newStack.push(5);
newStack.push(6);

newStack.display();
