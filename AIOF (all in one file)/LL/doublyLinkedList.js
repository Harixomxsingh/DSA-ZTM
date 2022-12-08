class node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor(value) {
    this.head = new node(value);
    this.tail = this.head;
    this.tail.prev = this.head;
    this.length = 1;
    return this;
  }
  append(value) {
    let newNode = new node(value);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
    // * - * - * - append -
  }
  prepend(value) {
    let newNode = new node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }
  // prepend - * - * - *
  print() {
    let arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }
  insert(index, value) {
    if (index >= this.length) {
      console.warn(
        "you index is too big compare to length, so we push at the end"
      );
      return this.append(value);
    }
    let newNode = new node(value);
    let captain = this.traverseToIndex(index - 1);
    let holdingNode = captain.next;
    captain.next = newNode;
    newNode.prev = captain;
    newNode.next = holdingNode;
    holdingNode.prev = newNode;
    this.length++;
    return this;
  }
  // *   *
  // \  /
  //   *
  traverseToIndex(index) {
    let currentNode = this.head;
    let counter = 0;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    if (index >= this.length) {
      return console.error("remove index is too big");
    }
    let captain = this.traverseToIndex(index - 1);
    let unwantedNode = captain.next;
    captain.next = unwantedNode.next;
    this.length--;
    return this;
  }
  // * - *
  //   *
}
const myLinkedList = new DoublyLinkedList(0);
myLinkedList.append(6);
myLinkedList.prepend(-1);
myLinkedList.insert(4, 14);
console.log(myLinkedList);
// myLinkedList.insert(5, 12);

// myLinkedList.insert(12, 100);
// myLinkedList.remove(1);
// myLinkedList.remove(1);
// myLinkedList.remove(10);
// console.log(myLinkedList);
console.log(myLinkedList.print());
