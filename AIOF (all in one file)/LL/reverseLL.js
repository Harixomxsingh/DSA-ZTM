// LinkedList
//  10 --> 5 --> 16

// const linkedlist = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class SignlyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    let newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  // adding beginning to the list
  prepend(value) {
    // let newNode = {
    //   value: value,
    //   next: null,
    // };
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    // return this;
  }
  // printList
  printList() {
    let arr = [];
    let current = this.head;
    while (current !== null) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
  inset(index, value) {
    if (index >= this.length) {
      console.warn("index length is too big, we just push at the last");
      return this.append(value);
    }
    let leader = this.traverToIndex(index - 1);
    let holdingNode = leader.next;
    let newNode = new Node(value);
    leader.next = newNode;
    newNode.next = holdingNode;
    this.length++;
    return this;
  }
  // *       *
  //  \    /
  //    *

  traverToIndex(index) {
    let currentNode = this.head;
    let counter = 0;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    let leader = this.traverToIndex(index - 1);
    let unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
  }
  // reverse
  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
  }
}
const LinkedList = new SignlyLinkedList(10);
LinkedList.append(5);
LinkedList.append(16);
LinkedList.prepend(1);
LinkedList.inset(3, 100);
LinkedList.inset(4, 3);
LinkedList.inset(114, 177);
LinkedList.remove(6);
LinkedList.reverse();
console.log(LinkedList.printList());
// console.log(LinkedList);
