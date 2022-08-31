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
  // print all function
  printAll() {
    let arr = [];
    let current = this.head;
    while (current !== null) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
  // inset method
  insert(index, value) {
    // check the index
    if (index >= this.length) {
      return this.append(value);
    }
    // create the node and added to the index position
    let newNode = new Node(value);
    // find the leader , here leader mean which index there we want to inset the value
    let leader = this.traversalToIndex(index - 1);
    // save the refer or pointer of next element of leader
    let holdingPosition = leader.next;
    // then create new leader.next
    leader.next = newNode;
    // add old to new node
    newNode.next = holdingPosition;
  }
  traversalToIndex(index) {
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      counter++;
      current = current.next;
    }
    return current;
  }
}

let list = new LinkedList(10);
list.append(11);
list.append(12);
// after add node class
list.append(13);
list.prepend(9);
list.insert(2, 99);
console.log(list.printAll());
console.log(list);
