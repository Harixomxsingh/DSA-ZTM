// in Data Structure we need to create our own data Structure , so we will create array

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(item) {
    return this.data[item];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
  }
  pop() {
    let lastitem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    return lastitem;
  }
  print() {
    console.log(this.data);
  }
  printUsingIndex(index) {
    return console.log(this.data[index]);
  }
}

let arr = new MyArray();
arr.push("Hello");
arr.push("world");
arr.push("Can");
arr.printUsingIndex(2);
arr.print();
// console.log(arr)
