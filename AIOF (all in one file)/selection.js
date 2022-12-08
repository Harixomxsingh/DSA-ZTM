const numbers = [99, 44, 21, 56, 7, 8, 3, 23, 5, 1, 0];

function selectionSort(array) {
  let length = array.length;
  for (let i = 0; i < length; i++) {
    let smallest = i;
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[smallest]) {
        smallest = j;
      }
      let temp = array[smallest];
      array[smallest] = array[i];
      array[i] = temp;
    }
  }
}
selectionSort(numbers);
console.log(numbers);
