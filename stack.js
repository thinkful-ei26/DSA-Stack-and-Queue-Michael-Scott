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
  isEmpty() {
    if (this.top === null) {
      return true;
    } else {
      return false;
    }
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

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let arr = s.split("");
  let newStr = "";
  const pStack = new Stack();
  for (let i = 0; i < arr.length; i++) {
    pStack.push(arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    let pStr = pStack.pop();
    newStr += pStr;
  }

  if (s === newStr) {
    return s + " is a palindrome";
  } else {
    return s + " is a not palindrome";
  }
}

function matching(s) {
  // get indexes
  let openArr = [];
  let closedArr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      openArr.push(i);
    }
    if (s[i] === ")") {
      closedArr.push(i);
    }
  }

  s = s.replace(/[^()]/g, "");
  console.log(s);
  let count = 0;
  const aStack = new Stack();
  for (let i = 0; i < s.length; i++) {
    aStack.push(s[i]);
  }
  for (let i = 0; i < s.length; i++) {
    let item = aStack.pop();
    if (item === "(") {
      count++;
    } else if (item === ")") {
      count--;
    }
  }
  if (count === 0) {
    return true;
  } else {
    if (openArr.length > closedArr.length) {
      throw new Error(
        `There was an extra open parenthesis at index: ${
          openArr[openArr.length - 1]
        }`
      );
    }
    if (openArr.length < closedArr.length) {
      throw new Error(
        `There was an extra closed parenthesis at index: ${
          closedArr[closedArr.length - 1]
        }`
      );
    }
  }
}
// console.log(matching("heloo here is the string( ( fir tge  asdasd ))"));

const testStack = new Stack();
testStack.push(8);
testStack.push(7);
testStack.push(3);
testStack.push(2);
testStack.push(6);
testStack.push(4);
testStack.push(1);

function sortStack(stack) {
  //step 1
  let tempStack = new Stack();
  // step 2
  while (stack.isEmpty() !== true) {
    // step 3
    let tempNode = stack.pop();
    // console.log("data: ", tempNode);
    // step 4
    while (tempStack.isEmpty() !== true && tempStack.peek().data < tempNode) {
      // console.log(tempNode);
      stack.push(tempStack.pop());
    }
    // step 5
    // console.log("temp stack is empty: ", tempStack.isEmpty() !== true);
    // console.log(tempNode);
    if (tempStack.peek() !== null) {
      // console.log("The peek data from tempStack: ", tempStack.peek().data);
      // console.log("The tempNode data that was popped: ", tempNode.data);
      // console.log(
      //   "tempStack.peek() > tempNode:",
      //   tempStack.peek().data > tempNode.data
      // );
    }
    tempStack.push(tempNode);
  }

  // step return the sorted stack
  return tempStack;
}

sortStack(testStack).display();
