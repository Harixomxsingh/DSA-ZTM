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

## Binary Search Tree

Binary Search tree is really good for searching

- lookup O(log N)
- insert O(log N)
- delete O(log N)

### rule

the binary search tree have this rule

- the right side always contains bigger number than the parent
- the left side contains lesser number

![binary search tree](https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/1200px-Binary_search_tree.svg.png)

> go to visulAlgo website and see how binary search tree work
> [visulAlgo](https://www.visualgo.net/en)

### pros and cons

## Pros

- Better than O(n)
- Ordered
- Flexible Size

## cons

- No O(1) operations
