// O(n)
let arr = ["mary", "john", "krish", "sky", "steve", "otis", "ruby", "peter"];

function findOtis(arr) {
  // the bigger of arr.length the bigger time take this function that why this is o(n)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "otis") {
      console.log(`otis found in the index of ${i}`);
    }
  }
}
findOtis(arr);
