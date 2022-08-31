class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//LIFO
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  // we want to see the very first item
  peek() {
    return this.top;
  }
  // add thing
  push(value) {
    let newNode = new Node(value);
    // if the stack is empty then top and bottom point to the same node
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = this.top;
    } else {
      let holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  pop() {
    // if there is not any item
    if (!this.top) {
      return null;
    }
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

let myStack = new Stack();
myStack.push("google");
myStack.push("Udemy");
myStack.push("Discord");
myStack.pop();
// console.log(myStack.peek());
console.log(myStack);
