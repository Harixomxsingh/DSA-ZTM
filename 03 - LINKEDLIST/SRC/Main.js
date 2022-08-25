// singlyLinkedList

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
    let newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    // return the linkedlist
    return this;
  }
}

let list = new LinkedList(10);
list.append(11);
list.append(12);
console.log(list);
