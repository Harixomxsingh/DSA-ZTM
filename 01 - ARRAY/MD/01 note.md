# ARRAY

our first Data Structure is ARRAY

## How to Built and Array with your own

in javascript if you want to build an array it just simple

```js
// build an array using built in javascript way
const arr = [1, 2, 3, 4, 5];
```

but if in any interview the interviewer say that built an array with your own , from scratch

**so built an array our self!**

data structure that usually a thing that we can built, so array is also a data structure,

- so first make a class of an array

```js
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
```
