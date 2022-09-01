// queues

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// FIFO
class Queues {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = this.first;
    }
    this.last.next = newNode;
    this.last = newNode;
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    let holdingPointer = this.first;
    this.first = this.first.next;
    this.length--;
    return this;
  }
}

let myQueues = new Queues();
myQueues.enqueue("shivam");
myQueues.enqueue("sumit");
myQueues.enqueue("Adarsh");
console.log(myQueues);
