O (log N) simply mean that we run a program but is half of step

like in a binary tree , our steps are:

- level 0(root): 2^root(0) = 1;
- level 1: 2^level1(1) = 2;
  // 2 to the power of 1
- level 2: 2^level2(2) = 4;
  // 2 to the power of 2 2x2 = 4
- level 3: 2^level3(3) = 8;
  // 2 to the power of 3 2x2x2 = 8

  we can find how many nodes we have using this formula

  number of nodes = 2^step

  ***

  log mean

  log 100 = 2
  10^2 = 100

log mean that if any operation doing a program using 8 step using log n we can cut half and using 4 step to run the program like _Binary Search_

---

## example of o(log n) in real life

when we see phone book we don't actually check every singly page we do so called _Divide & Conquer_ we just see the First character of the name and go to the First character page

also when we see dictionary we also do **Divide & Conquer** just we see the word and go to the word character page

---

O (Log N) is very better in Big-O complexity Chart is very effective and better than O(n)
