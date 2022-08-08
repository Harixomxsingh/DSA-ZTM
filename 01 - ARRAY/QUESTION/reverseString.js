// reverse string

function reverseString(str) {
  // first we check is the input in str
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Please type a valid string";
  }
  // if str is valid then we strat to reverse the string

  // first we make an arr
  const backwardStraing = [];
  // find the last length of string mean total item of length
  const totalLength = str.length - 1;
  // then we loop last to first 100 -> 1 and decanding the value of i
  for (let i = totalLength; i >= 0; i--) {
    // then we push the last index of str to first
    // mean str[i] so i=lastindex, i=100, str[100], str[99], str[98] and so and so for
    backwardStraing.push(str[i]);
  }
  // last we convert the backwardString arr to string
  return backwardStraing.join(" ");
}
console.log(reverseString("Hello world"));
