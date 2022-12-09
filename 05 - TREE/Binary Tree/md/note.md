# Binary Tree

# Date: 9/12/200

A binary tree look like this

![Binary tree img](https://cdn.programiz.com/sites/tutorial2program/files/perfect-binary-tree_0.png)

### rules

- each note can only have either 1 or 2 nodes
- each child only have one parent

is this tree we are look for a perfect binary tree means there is no gap, let me show

> this is perfect binary tree

- a perfect binary tree have 0 or 2 child
  ![Binary tree img](https://cdn.programiz.com/sites/tutorial2program/files/perfect-binary-tree_0.png)

<!-- --- -->

- a full binary tree have 1, 2 child

![example](https://miro.medium.com/max/1200/1*CMGFtehu01ZEBgzHG71sMg.png)

---

a perfect binary tree = root + child + 1 === leaf

we are doubling the next child

```js
//      root
//       1
//     /    \
//    2      2
//   / \    / \
//   4 4   4  4
// 4th the child convert into 8th child
// and so on .
```

---

- lookup O(log N)
- insert O(log N)
- delete O(log N)
