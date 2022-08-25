// singlyLinkedList

// we can also create a node class and use all the time though its not a beginner friendly
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  // append method
  append(value) {
    // let newNode = {
    //   value: value,
    //   next: null,
    // };
    let newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    // return the linkedlist
    return this;
  }
  // prepend method
  prepend(value) {
    let newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
}

let list = new LinkedList(10);
list.append(11);
list.append(12);
// after add node class
list.append(13);
list.prepend(9);
console.log(list);
